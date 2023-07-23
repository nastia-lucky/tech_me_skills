import { Builder, By, WebDriver, Key, until, WebElement } from "selenium-webdriver";
import { BasePage } from "./basePage";
import { MyBrowser } from "../framework/browser";
import { CatalogPage } from "./catalogPage";
import { SignInPage } from "./signInPage";

export class MainPage extends BasePage {

    private readonly catalogBtnLocator: By = By.xpath("//a[@class='b-main-navigation__link']//span[contains(text(),'Каталог')]");
    private readonly signInBtnLocattor: By = By.xpath("//div[contains(text(),'Вход')]");

    public async clickCatalogButtton() {
        let catalogBtn = await this.myDriver.findElement(this.catalogBtnLocator);
        await this.myDriver.wait(until.elementIsVisible(catalogBtn), this.waiter);
        await catalogBtn.click();
        return new CatalogPage();
    }

    public async clickSignInButtton() {
        let signInButton = await this.myDriver.findElement(this.signInBtnLocattor);
        await this.myDriver.wait(until.elementIsVisible(signInButton), this.waiter);
        await signInButton.click();
        return new SignInPage();
    }

}