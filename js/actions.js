const PORT = 5500;
const API_URL = `http://127.0.0.1:${PORT}`;


function fetchData() {
    fetch(`${API_URL}/data.json`)
        .then(response => response.json())
        .then(json => console.log(json));
};


fetchData();