import { BasePage } from "./basePage";
import { By, until } from "selenium-webdriver";


export class ForgotPasswordPage extends BasePage {

    private readonly restorePasswordFormLocator: By = By.xpath("//form[@novalidate]");


    public async clickSubmitButton() {
        let submitBtn = await this.myDriver.findElement(this.submitBtnLocator);
        await this.myDriver.wait(until.elementIsVisible(submitBtn), this.waiter);
        await submitBtn.click();
    }

    public async isRestorePasswordFormDisappears() {
        let form = await this.myDriver.findElements(this.restorePasswordFormLocator);
        return form.length == 0;
    }

}