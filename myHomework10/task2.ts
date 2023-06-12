type iMyPerson = {
    personName: string
}

let myPerson: iMyPerson = {
    personName: "Tutu"
}

let myPerson2: iMyPerson = {
    personName: "Tutti"
}

function getName(): string {
    return `My name is ${this.personName}`;
}


console.log(getName.call(myPerson));
console.log(getName.call(myPerson2));









