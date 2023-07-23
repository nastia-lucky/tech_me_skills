import superagent, { SuperAgent } from "superagent";
import { Builder, By, WebDriver, Key, until, WebElement } from "selenium-webdriver";
import exp from "constants";
import { createDecipheriv } from "crypto";
import { MyBrowser } from "../framework/browser";
import { MainPage } from "../pages/mainPage";
import { PageFactory } from "../pages/pageFactory";
import { Pages } from "../framework/enums/pages";
import { CatalogPage } from "../pages/catalogPage";
import { SignInPage } from "../pages/signInPage";
import { ForgotPasswordPage } from "../pages/forgotPasswordPage";
import { Drivers } from "../framework/enums/drivers";

describe("Onliner tests suite", () => {

    let url: string = "https://www.onliner.by/";
    let browser: Drivers = Drivers.CHROME;
    let email: string = "klepatskayanastia@gmail.com";
    let incorrectEmail: string = "klepatskahhbhyanastia@gmail.com";
    let password: string = "nastusha1213";
    let incorrectPassword: string = "nastusbhghhghja1213";


    beforeEach(async () => {
        await MyBrowser.getBrowser(browser);
        MyBrowser.goToURL(url);

    });

    afterEach(async () => {
        await MyBrowser.closeBrowser();
    });

    test("Check user can open Catalog", async () => {
        const mainPage: MainPage = PageFactory.getPage(Pages.MAIN) as MainPage;
        await mainPage.clickCatalogButtton();
        const catalogPage: CatalogPage = PageFactory.getPage(Pages.CATALOG) as CatalogPage;
        expect(await catalogPage.isClassifierDisplayed()).toBeTruthy();
    })

    test("Check user can sign in to onliner", async () => {
        const mainPage = PageFactory.getPage(Pages.MAIN) as MainPage;
        await mainPage.clickSignInButtton();
        const signInPage = PageFactory.getPage(Pages.SIGNIN) as SignInPage;
        await signInPage.inputEmail(email)
        await signInPage.inputPassword(password);
        await signInPage.clickSubmitButton();
        expect(await signInPage.isSignInFormDisappears).toBeTruthy();
    })

    test("Check user send forgot password form", async () => {
        const mainPage = PageFactory.getPage(Pages.MAIN) as MainPage;
        await mainPage.clickSignInButtton();
        const signInPage = PageFactory.getPage(Pages.SIGNIN) as SignInPage;
        await signInPage.clickForgotPasswordButton();
        const forgotPasswordPage = PageFactory.getPage(Pages.FORGOTPASSSWORD) as ForgotPasswordPage;
        await forgotPasswordPage.inputEmail(email);
        await forgotPasswordPage.clickSubmitButton();
        expect(await forgotPasswordPage.isRestorePasswordFormDisappears).toBeTruthy();
    })

    test("Check correct message appears upon inputting not correct credentials", async () => {
        const mainPage = PageFactory.getPage(Pages.MAIN) as MainPage;
        await mainPage.clickSignInButtton();
        const signInPage = PageFactory.getPage(Pages.SIGNIN) as SignInPage;
        await signInPage.inputEmail(incorrectEmail)
        await signInPage.inputPassword(incorrectPassword)
        await signInPage.clickSubmitButton();
        expect(await signInPage.isIncorrectLoginPswMessageDisplayed()).toBeTruthy();
    })

    test("Check correct message appears if user clicks Submit button without password provided", async () => {
        const mainPage = PageFactory.getPage(Pages.MAIN) as MainPage;
        await mainPage.clickSignInButtton();
        const signInPage = PageFactory.getPage(Pages.SIGNIN) as SignInPage;
        await signInPage.inputEmail(incorrectEmail);
        await signInPage.clickSubmitButton();
        expect(await signInPage.isIndicatePswMessageDisplayed()).toBeTruthy();
    })

})