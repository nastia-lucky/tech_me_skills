const evenNumbers: number[] = [2, 4, 6, 8, 10];
const oddNumbers: number[] = [1, 3, 5, 7, 9];

function createArray(arr1: number[], arr2: number[]): number[] {
    const newArray: number[] = new Array;
    for (let a of arr1) {
        newArray.push(a);
    }
    for (let a of arr2) {
        newArray.push(a);
    }
    return newArray;
}

console.log(createArray(evenNumbers, oddNumbers).indexOf(8));