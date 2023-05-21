type iCat = {
    catName: string;
    age: number
}

let cat: iCat = {
    catName: "Енчик",
    age: 3
}

let catInString = JSON.stringify(cat);
let catClonedJSON: iCat = JSON.parse(catInString);

let catClonedObject: iCat = Object.assign({}, cat);

cat.catName = "new name";
console.log(catClonedJSON);
console.log(catClonedObject);
console.log(cat);