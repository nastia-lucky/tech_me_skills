import { ToDO } from "./ToDo";

const url = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
    const response = await fetch(url);
    //return JSON.stringify(response);
    return await response.json();
}

function printToDo(response) {
    let toDos: ToDO[] = JSON.parse(response);
    console.log(toDos);
    toDos.forEach((toDo: ToDO) => {
        `The id of to do is ${toDo.id} and the title of toDo is ${toDo.title}`;
    })
}

getTodos().then((result) => {
    printToDo(result);
})


