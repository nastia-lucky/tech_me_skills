let number2: number = 5.666666;

function checkInt(a: number) {
    if (Number.isInteger(a)) {
        console.log(a);
    }
    else {
        Math.round(a);
    }
}


checkInt(number2);