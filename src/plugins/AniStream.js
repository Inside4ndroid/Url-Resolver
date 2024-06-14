const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};

export async function AniStream(url) {
    try {
        const embedurl = await getEmbedUrl(url);
        const response = await fetch(embedurl, { headers: headers });
        const html = await response.text();
        const regex = /base64,([^"]+)/;
        const match = html.match(regex);
        if (match) {
            const decodedString = atob(match[1]);
            const regexx = /window\.player__config\s*=\s*({.*?});/;
            const matchx = decodedString.match(regexx);

            if (matchx) {
                const playerConfig = JSON.parse(matchx[1]);
                const sources = playerConfig.playlist[0].sources;

                const modifiedSources = sources.map(source => {
                    const label = source.label || 'hls';
                    return { file: source.src, label: label, ...source };
                });

                const data = {};
                modifiedSources.forEach((source, index) => {
                    data[`file${index + 1}`] = { file: source.file, label: source.label };
                });
                return { data: data };
            }
        } else {
            const data = {
                Error: 'ERROR: AniStream-0000'
            };
            return { data: data };
        }
    } catch (error) {
        const data = {
            Error: 'ERROR: AniStream-0001'
        };
        return { data: data };
    }

}

function getEmbedUrl(url) {
    const regex = /^(https?:\/\/(?:www\.)?ani-stream\.com\/)([0-9a-zA-Z-]+)$/;

    if (url.includes("/embed-")) {
        return url;
    }

    const match = url.match(regex);
    if (match) {
        const baseUrl = match[1];
        const identifier = match[2];
        return `${baseUrl}embed-${identifier}.html`;
    }

    return url;
}
