const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};

const host = 'https://www.amdahost.com/';

export async function AmdaHost(url) {
    const response = await fetch(url, { headers: headers });
    const html = await response.text();
    const videoUrl = extractVideoUrl(html);
    if (videoUrl) {
        const data = {
            file: host+videoUrl
        };
        return { data: data };
    } else {
        const data = {
            Error: 'ERROR: AmdaHost-0000'
        };
        return { data: data };
    }
}

function extractVideoUrl(html) {
    const regex = /id="myVideo".+?data-src="([^"]+)"/;
    const match = html.match(regex);
    return match ? match[1] : null;
}
