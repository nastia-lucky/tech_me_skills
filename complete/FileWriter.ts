import { Product } from "./Product";
import * as fs from "node:fs";

export default class FileWriter {


    private static successMessage = "Data was successfully saved!";

    static async writeMultipleData(products: Product[], fileName: string) {
        fs.writeFile(fileName, JSON.stringify(products), () => {
            console.log(this.successMessage);
        });
    }

    static async writeSingleData(product: Product, fileName: string) {
        fs.writeFile(fileName, JSON.stringify(product), () => {
            console.log(this.successMessage);
        });
    }

    static async writeData(data: number, fileName: string) {
        fs.writeFile(fileName, JSON.stringify(data), () => {
            console.log(this.successMessage);
        });
    }
}