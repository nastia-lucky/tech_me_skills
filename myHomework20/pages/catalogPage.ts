import { By, until } from "selenium-webdriver";
import { MyBrowser } from "../framework/browser";
import { BasePage } from "./basePage";

export class CatalogPage extends BasePage {


    private readonly classifierLblLocator: By = By.xpath("//ul[@class='catalog-navigation-classifier ']");

    public async isClassifierDisplayed() {
        let catalogClassifierLbl = await this.myDriver.findElement(this.classifierLblLocator);
        await this.myDriver.wait(until.elementIsVisible(catalogClassifierLbl), this.waiter);
        return await catalogClassifierLbl.isDisplayed();
    }

}