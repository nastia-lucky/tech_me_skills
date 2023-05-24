type iStudent = {
    name: string,
    age: number
}
let student1: iStudent = {
    name: 'Polina',
    age: 27,
}
let student2: iStudent = {
    name: 'Polina',
    age: 27,
}

function isEquals(a: iStudent, b: iStudent): boolean {
    return a.age === b.age && a.name === b.name;
}

console.log(isEquals(student1, student2));



