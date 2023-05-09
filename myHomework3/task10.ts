let key: boolean = true;
let documents: boolean = true;
let pen: boolean = true;
let apple: boolean = false;
let orange: boolean = false;

let shouldGoToWork: boolean = false;;

if (key && documents && pen) {
    if (apple || orange) {
        shouldGoToWork = true;
    }
}

console.log(shouldGoToWork);

