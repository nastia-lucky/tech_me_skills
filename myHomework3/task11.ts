let num: number = 3;

if (num % 5 === 0) {
    console.log("Fiz");
}
else if (num % 3 === 0) {
    console.log("Buz");
}
else if (num % 5 === 0 && num % 3 === 0) {
    console.log("FizBuz");
}