class Animal {
    animalName: string;
    static animalType: string;

    constructor(animalName: string, animalType: string) {
        this.animalName = animalName;
        Animal.animalType = animalType;
    }

    getAnimalInfo(): string {
        return `This is a ${Animal.animalType}. It's name is ${this.animalName}`;
    }
}

let animal1: Animal = new Animal("Doggy", "dog");
console.log(animal1);
console.log(animal1.getAnimalInfo());