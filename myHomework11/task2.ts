const url = "https://jsonplaceholder.typicode.com/";

async function getResource() {
    const response = await fetch(url);
    return await response.json();
}

getResource().then((result) => {
    console.log(result);
})