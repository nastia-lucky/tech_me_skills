type iPerson = {
    personName: string
}

let myPerson: iPerson = {
    personName: "Tutu"
}

let myPerson2: iPerson = {
    personName: "Tutti"
}

function getName(): string {
    return `My name is ${this.personName}`;
}


console.log(getName.call(myPerson));
console.log(getName.call(myPerson2));









