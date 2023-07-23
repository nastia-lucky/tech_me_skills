import { WebDriver, Builder } from "selenium-webdriver";
import { Drivers } from "./enums/drivers";

export class DriveFactory {

    public static async createDriver(browser: Drivers) {
        let myDriver: WebDriver;
        switch (browser) {
            case Drivers.CHROME:
                myDriver = await new Builder().forBrowser("chrome").build();
                break;
            case Drivers.FIREFOX:
                myDriver = await new Builder().forBrowser("firefox").build();
                break
            default: console.log("I don't know such browser type")
        }
        return myDriver;
    }
}
