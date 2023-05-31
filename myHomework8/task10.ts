let elem2: any;
let elem3: any;

let elem2DefaultValue: string = "bbb";
let elem3DefaultValue: string = "bbb";

const myArray: string[] = ["dog", "cat", "parrot"];

function destructor(array: string[]) {
    const [first, second, third, ...rest] = array;
    if (second != undefined) {
        elem2 = second;
    }
    else { elem2 = elem2DefaultValue; }
    if (third != undefined) {
        elem3 = third;
    }
    else {
        elem3 = elem3DefaultValue;
    }
}

destructor(myArray);
console.log(elem2);
console.log(elem3);