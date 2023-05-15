let str: string = "new sentence";

function checkDot(str: string) {
    if (str.endsWith(".")) {
        console.log("Данное предложение закончено");
    }
    else {
        console.log("В конце предложения не хватает точки");
    }
}

checkDot(str);