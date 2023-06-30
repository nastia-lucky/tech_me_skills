import { Product } from "./Product";
import { Rating } from "./Rating";

export class ProductsService {

    private url: string = "https://fakestoreapi.com/products/";

    private products: Product[];

    constructor() {
        this.products = [];
    }

    get Products() {
        return this.products;
    }

    async initialize() {
        const response = await fetch(this.url);
        let myResponse = await response.json();
        myResponse.forEach(element => {
            let rating: Rating = new Rating(element.rating.rate, element.rating.count);
            this.products.push(new Product(element.title, element.price, element.description, rating, element.category, element.image));
        });
    }

    getProductsByPrice(minValue: number, maxValue: number) {
        return this.products.filter((product: Product) => {
            return product.Price > minValue && product.Price < maxValue;
        })
    }

}