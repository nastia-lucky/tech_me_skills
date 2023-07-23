import { Browser } from "selenium-webdriver";
import { MyBrowser } from "../framework/browser";
import { By, until } from "selenium-webdriver";

export abstract class BasePage {


    protected myDriver = MyBrowser.getDriver();
    protected readonly emailTxtLocator: By = By.xpath("//input[contains(@placeholder,'e-mail')]");
    protected readonly submitBtnLocator: By = By.xpath("//button[@type='submit' and contains(@class,'auth-button')]");
    protected waiter: number=4000;


    public async inputEmail(email: string) :Promise<BasePage> {
        let emailTxt = await this.myDriver.findElement(this.emailTxtLocator);
        await this.myDriver.wait(until.elementIsVisible(emailTxt), this.waiter);
        await emailTxt.sendKeys(email);
        return this;
    }


}