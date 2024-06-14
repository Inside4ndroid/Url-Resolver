import { fetchJson } from "../Utils.js";

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'Referer': 'https://www.amazon.com/'
};

export async function Amazon(url) {
    try {
        const { mediaId } = extractHostAndMediaId(url);
        const webUrl = `https://www.amazon.com/drive/v1/shares/${mediaId}?shareId=${mediaId}&resourceVersion=V2&ContentType=JSON&_=${Date.now()}`
        console.log(webUrl);
        const nodeInfo = await fetchJson(webUrl, headers);
        console.log(nodeInfo);
        const nodeId = nodeInfo.nodeInfo.id;
        const nodeUrl = `https://www.amazon.com/drive/v1/nodes/${nodeId}/children?asset=ALL&tempLink=true&limit=1&searchOnFamily=false&shareId=${mediaId}&offset=0&resourceVersion=V2&ContentType=JSON&_=${Date.now()}`;
        console.log(nodeUrl);
        const sourceInfo = await fetchJson(nodeUrl, headers);
        console.log(sourceInfo);
        const source = sourceInfo.data[0].tempLink;

        if (source) {
            const data = {
                file: source
            };
            return { data: data };
        } else {
            const data = {
                Error: 'Something went wrong!'
            };
            return { data: data };
        }
    } catch (error) {
        const data = {
            Error: 'Something went wrong!'
        };
        return { data: data };
    }

}

function extractHostAndMediaId(url) {
    const regex = /https:\/\/(www\.amazon\.com)\/clouddrive\/share\/([0-9a-zA-Z]+)/;
    const match = url.match(regex);

    if (match) {
        const mediaId = match[2];
        return { mediaId };
    } else {
        throw new Error('URL does not match the expected pattern');
    }
}