let word: string = "ротатор";

function checkWord(word: string): boolean {
    let myArray: string[] = Array.from(word.trim());
    let lengthArray = myArray.length;
    for (let i = 0; i < lengthArray; i++) {
        if (myArray.length == 1) {
            return true;
        }
        else {
            if (myArray[0] != myArray[myArray.length - 1]) {
                return false;
            }
            myArray.pop();
            myArray.shift();
        }
    }
    return true;
}

console.log(checkWord(word));