function getResult(str: string): void {
    let firstResult = Number.parseInt(str.slice(0, 1));
    let secondResult = Number.parseInt(str.slice(str.length - 1));
    console.log(`The result is ${getWord(firstResult)} to ${getWord(secondResult)}`)
}

function getWord(a: number): string {
    let result: any;
    switch (a) {
        case 0:
            result = "zero";
            break;
        case 1:
            result = "one";
            break;
        case 2:
            result = "two";
            break
        case 3:
            result = "three";
            break;
        case 4:
            result = "four";
            break;
        case 5:
            result = "five";
            break;
        case 6:
            result = "six";
            break;
        case 7:
            result = "seven";
            break;
        case 8:
            result = "eight";
            break;
        case 9:
            result = "nine";
            break;
        default: console.log("I don't know such type");
    }
    return result;

}

getResult("0:9");
