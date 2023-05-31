const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];


function createSet(myArray: number[]) {
    let set = new Set();
    for (let el of myArray) {
        set.add(el);
    }
    return set;
}

createSet(numbers);




