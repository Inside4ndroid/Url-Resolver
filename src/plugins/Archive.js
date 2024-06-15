const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};

export async function Archive(url) {
    try {
        const host = 'https://archive.org';
        const response = await fetch(url, { headers: headers });
        const html = await response.text();
        const videoUrl = extractVideoUrl(html);
        const Label = extractLabel(html);
        if (videoUrl) {
            const data = {
                file: host+videoUrl.replace('/download/', '/serve/'),
                label: Label
            };
            return { data: data };
        } else {
            const data = {
                Error: 'ERROR: Archive-0000'
            };
            return { data: data };
        }
    } catch (error) {
        const data = {
            Error: 'ERROR: Archive-0001'
        };
        return { data: data };
    }
}

function extractVideoUrl(html) {
    const regex = /file":"(?<url>[^"]+)[^}]+?label":"(?<label>\d+p?)/;
    const match = html.match(regex);
    return match ? match[1] : null;
}

function extractLabel(html) {
    const regex = /file":"(?<url>[^"]+)[^}]+?label":"(?<label>\d+p?)/;
    const match = html.match(regex);
    return match ? match[2] : null;
}