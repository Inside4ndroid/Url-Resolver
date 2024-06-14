export async function fetchJson(url, headers) {
    const response = await fetch(url, { headers: headers });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}