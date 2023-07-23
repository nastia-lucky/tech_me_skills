import { Pages } from "../framework/enums/pages";
import { BasePage } from "./basePage";
import { CatalogPage } from "./catalogPage";
import { ForgotPasswordPage } from "./forgotPasswordPage";
import { MainPage } from "./mainPage";
import { SignInPage } from "./signInPage";

export class PageFactory {

    public static getPage(pageType: Pages) {
        switch (pageType) {
            case Pages.MAIN:
                return new MainPage();
            case Pages.FORGOTPASSSWORD:
                return new ForgotPasswordPage();
            case Pages.CATALOG:
                return new CatalogPage();
            case Pages.SIGNIN:
                return new SignInPage;
            default: console.log("I don't know such page")
        }
    }
}