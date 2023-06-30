import { Rating } from "./Rating";

export class Product {

    private title: string;
    private price: number;
    private description: string;
    private rating: Rating;
    private category: string;
    private image: string;

    constructor(title: string, price:number, description: string, rating:Rating, category: string, image:string){
        this.title=title;
        this.price=price;
        this.description=description;
        this.rating=rating;
        this.category=category;
        this.image=image;
    }

    get Title(){
        return this.title;
    }

    get Price(){
        return this.price;
    }

    get Description(){
        return this.description;
    }

    get Rating(){
        return this.rating;
    }

    get Category(){
        return this.category;
    }

    get Image(){
        return this.image;
    }

}