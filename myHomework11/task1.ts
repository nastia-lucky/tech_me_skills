import { Post } from "./Post";


const url = "https://jsonplaceholder.typicode.com/posts";

async function getResource() {
    const response = await fetch(url);
    return await response.json();
}

function isSequenceCorrect(first: number, second: number, third: number, fourth: number) {
    getResource().then((response) => {
        let myPosts: Post[] = JSON.parse(response);
        if (myPosts[0].id != first) {
            throw Error(" id is not as expeced");
        }
        else {
            console.log(myPosts[0].body);
            if (myPosts[1].id != second) {
                throw Error(" id is not as expeced");
            }
            else {
                console.log(myPosts[1].body);
                if (myPosts[2].id != third) {
                    throw Error(" id is not as expeced");
                }
                else {
                    console.log(myPosts[2].body);
                    if (myPosts[3].id != fourth) {
                        throw Error(" id is not as expeced");
                    }
                    else {
                        console.log(myPosts[3].body);
                    }
                }
            }
        }
    });
}



