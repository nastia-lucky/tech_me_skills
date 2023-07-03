import { ProductsService } from "./ProductsService";
import FileWriter from "./FileWriter";


let productService = new ProductsService();
const result1: string = "result_1.json";
const result2: string = "result_2.json";
const result3: string = "result_3.json";
const result4: string = "result_4.json";
const result5: string = "result_5.json";
const result6: string = "result_6.json";
const result7: string = "result_7.json";
const result8: string = "result_8.json";
const result9: string = "result_9.json";
const result10: string = "result_10.json";
const result11: string = "result_11.json";
const minPrice: number = 10;
const maxPrice: number = 100;
const discount = 50;
const title: string = "Fjallraven - Foldsack No. 1 Backpack, Fits 15";
const description: string = "rfect pack for everyday use and walks in the forest";
const category = "men's clothing";


productService.initialize().then(() => {
    FileWriter.writeMultipleData(productService.getProductsByPrice(minPrice, maxPrice), result1);
    FileWriter.writeSingleData(productService.getProductsByTitle(title), result2);
    FileWriter.writeMultipleData(productService.getProductsByDescription(description), result3);
    FileWriter.writeMultipleData(productService.sortProductsByRate(), result4);
    FileWriter.writeMultipleData(productService.getSortProductsByRate(4), result5);
    FileWriter.writeMultipleData(productService.getProductsByCategory(category), result6);
    FileWriter.writeMultipleData(productService.getProductsByImage(), result7);
    FileWriter.writeMultipleData(productService.getProductsWithUpdatedDescription(), result8);
    FileWriter.writeMultipleData(productService.getProductsWithDiscountByCategory(category, discount), result9);
    FileWriter.writeMultipleData(productService.getProductsWithRoundPrice(), result10);
    FileWriter.writeData(productService.getRateCount(), result11);

})
