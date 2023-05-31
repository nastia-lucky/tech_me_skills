let ingridients = new Map<string, number>([
    ["cucumber", 300],
    ["tomato", 200],
    ["salt", 10],
    ["sour cream", 110]
]);


let entries: IterableIterator<[string, number]> = ingridients.entries();
for(let entry of ingridients.entries()) {
    if(entry[1] > 100) {
        console.log(entry[0]);
    }
}
