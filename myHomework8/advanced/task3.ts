let phrase2: string = "Dermatoglyphics";

function checkIsogram(myString: string): boolean {
    let set = new Set();
    let myArray: string[] = myString.toLowerCase().split("");
    console.log(myArray);
    for (let el of myArray) {
        if (set.has(el)) {
            return false;
        }
        else {
            set.add(el);
        }
    }
    return true;
}

console.log(checkIsogram(phrase2));