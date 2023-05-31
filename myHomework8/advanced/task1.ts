let set = new Set(["a", "e", "i", "o", "A", "E", "i", "O"]);

let phrase: string = "This website is for losers LOL!";

function killTroll(myString: string): string {
    let myArray: string[] = myString.split("");
    let newArray: string[] = myArray.filter((value: string) => !set.has(value));
    return newArray.join("");
}

console.log(killTroll(phrase));





