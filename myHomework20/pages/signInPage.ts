import { BasePage } from "./basePage";
import { Builder, By, WebDriver, Key, until, WebElement } from "selenium-webdriver";
import { ForgotPasswordPage } from "./forgotPasswordPage";


export class SignInPage extends BasePage {

    private readonly passwordTxtLocator: By = By.xpath("//input[@type='password']");
    private readonly forgotPasswordBtnLocator: By = By.xpath("//a[contains(text(),'не помню пароль')]");
    private readonly signInForm: By = By.xpath("//div[@class='auth-form__body']");
    private readonly incorrectLoginPswMessageLocator: By = By.xpath("//div[contains(text(),'Неверный логин или пароль')]");
    private readonly indicatePasswordMessageLocator: By = By.xpath("//div[contains(text(),'Укажите пароль')]");


    public async inputPassword(password: string): Promise<SignInPage> {
        let passwordTxt = await this.myDriver.findElement(this.passwordTxtLocator);
        await this.myDriver.wait(until.elementIsVisible(passwordTxt), this.waiter);
        await passwordTxt.sendKeys(password);
        return this;
    }

    public async clickSubmitButton() {
        let submitBtn = await this.myDriver.findElement(this.submitBtnLocator);
        await this.myDriver.wait(until.elementIsVisible(submitBtn), this.waiter);
        await submitBtn.click();

    }


    public async clickForgotPasswordButton() {
        let forgotPasswordBtn = await this.myDriver.findElement(this.forgotPasswordBtnLocator);
        await this.myDriver.wait(until.elementIsVisible(forgotPasswordBtn), this.waiter);
        await forgotPasswordBtn.click();
        return new ForgotPasswordPage();
    }

    public async isSignInFormDisappears() {
        let submitBTN = await this.myDriver.findElement(this.submitBtnLocator);
        await this.myDriver.wait(until.elementIsNotVisible(submitBTN), this.waiter);
        let signInElements: WebElement[] = await this.myDriver.findElements(this.signInForm);
        return signInElements.length == 0;
    }

    public async isIncorrectLoginPswMessageDisplayed() {
        await this.myDriver.wait(until.elementLocated(this.incorrectLoginPswMessageLocator), this.waiter);
        let message: WebElement = await this.myDriver.findElement(this.incorrectLoginPswMessageLocator);
        await this.myDriver.wait(until.elementIsVisible(message), this.waiter);
        return await message.isDisplayed();
    }

    public async isIndicatePswMessageDisplayed() {
        await this.myDriver.wait(until.elementLocated(this.indicatePasswordMessageLocator), this.waiter);
        let message: WebElement = await this.myDriver.findElement(this.indicatePasswordMessageLocator);
        await this.myDriver.wait(until.elementIsVisible(message), this.waiter);
        return await message.isDisplayed(); 
    
    }





}