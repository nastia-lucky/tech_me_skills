let str: string = "some value";

function someFunction(a: number) {
    if (a > str.length) {
        console.log("Вы вышли за границу строки");
    }
}

someFunction(15);

