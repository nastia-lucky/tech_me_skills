import { Builder, WebDriver } from "selenium-webdriver"
import { DriveFactory } from "./driverFactory";
import { Drivers } from "./enums/drivers";


export class MyBrowser {

    private static myDriver: WebDriver;

    private constructor() {
    }

    public static async getBrowser(browser: Drivers) {
        if (this.myDriver == undefined) {
            this.myDriver = await DriveFactory.createDriver(browser);
            await this.myDriver.manage().window().maximize();
            return this.myDriver;
        }
        else {
            return this.myDriver;
        }
    }

    public static getDriver() {
        return this.myDriver;
    }

    public static async closeBrowser() {
        await this.myDriver.quit();
        this.myDriver = undefined;
    }

    public static goToURL(url: string) {
        this.myDriver.get(url);
    }


}