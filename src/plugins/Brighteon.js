const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};

export async function Brighteon(url) {
    try {
        const response = await fetch(url, { headers: headers });
        const html = await response.text();
        const videoUrl = extractVideoUrl(html);
        if (videoUrl) {
            const data = {
                file: videoUrl
            };
            return { data: data };
        } else {
            const data = {
                Error: 'ERROR: Brighteon-0000'
            };
            return { data: data };
        }
    } catch (error) {
        const data = {
            Error: 'ERROR: Brighteon-0001'
        };
        return { data: data };
    }

}

function extractVideoUrl(html) {
    const regex = /[0-9a-zA-Z-]+"><source\s*src=['"](.*?)['"].+?/;
    const match = html.match(regex);
    return match ? match[1] : null;
}