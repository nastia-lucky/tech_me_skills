let str1: string = "я учу typescript!";

let str2: string = "учу";

if (str1.includes(str2)) {
    console.log(str1.indexOf(str2));
}
else {
    console.log("Данной подстроки нет");
}