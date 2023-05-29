type iPerson = {
    someName?: string;
    surname?: string;
    age?: string;
}

let person: iPerson = {
    someName: "Петр",
    // surname: "Петров",
    age: "20 лет"
}

let name1: any;
let surname1: any;
let age1: any;

function applyValues(person: iPerson) {
    const { someName, surname, age } = person;
    if (someName == undefined) {
        name1 = "Аноном";
    }
    else { name1 = someName; }
    if (surname == undefined) {
        surname1 = "Анонимович";
    }
    else {
        surname1 = surname;
    }
    if (age == undefined) {
        age1 = "? лет";
    }
    else { age1 = age; }
}

applyValues(person);
console.log(name1);
console.log(surname1);
console.log(age1);


