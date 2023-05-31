
let myArray: number[] = new Array;
let newArray: number[] = new Array;


function createRandomArray(length: number): number[] {
    for (let i = 0; i < length; i++) {
        myArray.push(Math.round(Math.random() * 100));
    }
    return myArray;
}

function multiply(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        newArray.push(Math.pow(array[i], 3));
    }
    return newArray;
}

console.log(multiply(createRandomArray(5)));

