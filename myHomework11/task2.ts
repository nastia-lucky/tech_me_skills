const url = "https://jsonplaceholder.typicode.com/";

async function getResource() {
    const response = await fetch(url);
    return response
}

getResource().then((result) => {
    console.log(result);
})