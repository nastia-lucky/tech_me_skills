import { Post } from "./Post";


const url = "https://jsonplaceholder.typicode.com/posts";

async function getResource() {
    const response = await fetch(url);
    return await response.json();
}

function isSequenceCorrect(sequence: number[]) {
    getResource().then((response) => {
        let myPosts: Post[] = JSON.parse(response);
        for (let i = 0; i < sequence.length; i++) {
            if (myPosts[i].id != sequence[i]) {
                throw Error("ID is not as expected");
            }
            else {
                console.log(myPosts[i].body);
            }
        }
    });
}





