import { Product } from "./Product";
import { Rating } from "./Rating";

export class ProductsService {

    private url: string = "https://fakestoreapi.com/products/";
    private ext1 = "jpg";
    private ext2 = "png";
    private ext3 = "jpeg";

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
        return this.products.filter((product) => { return product.Price > minValue && product.Price < maxValue }
        )
    }

    getProductsByTitle(title: string) {
        return this.products.find((product) =>
            product.Title.includes(title)
        )
    }

    getProductsByDescription(description: string) {
        return this.products.filter((product) =>
            product.Description.includes(description)
        )
    }

    sortProductsByRate() {
        return this.products.sort((product1, product2) => {
            return (product1.Rating.Rate > product2.Rating.Rate ? -1 : 1);
        });
    }

    getSortProductsByRate(minValue: number) {
        let myArray = this.products.filter((product) => {
            return product.Rating.Rate >= minValue;
        }
        )
        return myArray.sort((product1, product2) => {
            return (product1.Rating.Count < product2.Rating.Count ? -1 : 1);
        });
    }

    getProductsByCategory(category: string) {
        let myArray = this.products.filter((product) => {
            return product.Category === category;
        })
        return myArray.sort((product1, product2) => {
            return (product1.Price < product2.Price ? -1 : 1);
        });
    }

    getProductsByImage() {
        return this.products.filter((product) => {
            let productImage = product.Image;
            let extension = productImage.substring(productImage.length - 5, productImage.length);
            if (!extension.includes(this.ext1) && !extension.includes(this.ext2) && !extension.includes(this.ext3)) {
                return product;
            }
        }
        )
    }

    getProductsWithUpdatedDescription() {
        return this.products.map((product) => {
            let description = product.Description;
            if (description.length > 30) {
                let updatedDescription = description.substring(0, 27) + "...";
                product.Description = updatedDescription;
            }
            return product;
        }
        )
    }

    getProductsWithDiscountByCategory(category: string, discount: number) {
        return this.products.map((product) => {
            if (product.Category === category) {
                let productPrice = product.Price;
                let updatedPrice = productPrice - (productPrice * discount / 100);
                product.Price = updatedPrice;
                return product;

            }
            return product;
        }
        )
    }

    getProductsWithRoundPrice() {
        return this.products.map((product) => {
            let productPrice = product.Price;
            let updatedPrice = Math.round(productPrice);
            product.Price = updatedPrice
            return product;
        }
        )
    }

    getRateCount() {
        let generalCount = 0;
        this.products.forEach((product) => {
            generalCount = generalCount + product.Rating.Count;
        }
        )
        return generalCount;
    }
}

