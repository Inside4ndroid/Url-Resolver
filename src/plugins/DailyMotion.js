const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'Origin':'https://www.dailymotion.com',
    'Referer':'https://www.dailymotion.com/'
};

export async function DailyMotion(url) {
    // try {
        const metaUrl = 'https://www.dailymotion.com/player/metadata/video/'+extractMediaId(url);

        console.log(metaUrl);

        const response = await fetch(metaUrl, { headers: headers });
        const json = await response.json();
        const videoUrl = extractVideoUrl(json);
        if (videoUrl) {
            const data = {
                file: videoUrl
            };
            return { data: data };
        } else {
            const data = {
                Error: 'ERROR: DailyMotion-0000'
            };
            return { data: data };
        }
    // } catch (error) {
    //     const data = {
    //         Error: 'ERROR: DailyMotion-0001'
    //     };
    //     return { data: data };
    // }

}

function extractVideoUrl(json) {
    if (json && json.qualities && json.qualities.auto && json.qualities.auto.length > 0) {
        return json.qualities.auto[0].url;
    } else {
        return null;
    }
}

function extractMediaId(url) {
    const regex = /(?:\/\/|\.)?(dailymotion\.com|dai\.ly)\/(?:video|embed|sequence|swf|player)(?:\/video|\/full)?\/(?:[a-z0-9]+\.html\?video=)?([0-9a-zA-Z]+)/;
    const match = url.match(regex);

    if (match) {
        return match[2];
    } else {
        throw new Error('URL does not match the expected pattern');
    }
}