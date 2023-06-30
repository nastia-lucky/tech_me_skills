import { ProductsService } from "./ProductsService";
let productService = new ProductsService();


productService.initialize().then(() => {
    console.log(productService.Products.length);
    console.log(productService.getProductsByPrice(3.9, 7.8));

})
