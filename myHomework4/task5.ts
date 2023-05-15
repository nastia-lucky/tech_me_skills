let str2: string = "я учу typescript!";

let strBySubstring1 = str2.substring(2, 5);
let strBySlice1 = str2.slice(2, 5);

let strBySubstring2 = str2.substring(6, str2.length-1);
let strBySlice2 = str2.slice(6, -1);

console.log(strBySubstring1);
console.log(strBySlice1);

console.log(strBySubstring2);
console.log(strBySlice2);

