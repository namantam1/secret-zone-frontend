const BASE_URL = process.env.REACT_APP_API_BASE_URL;

console.log(BASE_URL, "API URL")

function updateOptions(options) {
    const TOKEN = sessionStorage.getItem("access");
    // console.log(TOKEN)
    const update = { ...options };
    update.headers = {
        ...update.headers,
        Authorization: `Bearer ${TOKEN}`,
    }
    return update;
}

export default function fetcher(path, options) {
    return fetch(BASE_URL + path, updateOptions(options));
}


