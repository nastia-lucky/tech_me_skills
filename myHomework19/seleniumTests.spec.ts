import superagent, { SuperAgent } from "superagent";
import { Builder, By, WebDriver, Key, until, WebElement } from "selenium-webdriver";
import exp from "constants";
import { createDecipheriv } from "crypto";

describe("Onliner tests suite", () => {

    let driver: WebDriver;
    const catalogButonLocator: string = "//a[@class='b-main-navigation__link']//span[contains(text(),'Каталог')]";
    const fromPriceFilterLocator: string = "(//input[contains(@class,'price')])[1]";
    const toPriceFilterLocator: string = "(//input[contains(@class,'price')])[2]";
    const mobilePhoneCatalogItemLocator = "//div[contains(text(),'Мобильны')]";
    const chargeCatalogItemLocator = "//a[@class='catalog-navigation-list__dropdown-item']//span[contains(text(),' Наушники ')]";
    const priceProductLabelLocator = "//div[@class='schema-product__price']//span[contains(@data-bind,'minPrice')]";
    const noProductsMessageLocator = "//div[contains(text(),'нас нет таких товаров')]";
    const primeProductsCheckBoxLocator = "(//div[@class='i-checkbox__faux'])[1]";
    const productItemLocator = "//div[@class='schema-product__title']";
    const primeLblLocator = "//div[contains(@class,'trigger_prime')]";
    const newsLocator = "//span[@class='i-checkbox']//following-sibling::span[contains(text(),'Новинки в Каталоге')]";
    const superPriceProductsCheckBoxLocator = "(//div[@class='i-checkbox__faux'])[3]";
    const superPriceLblLocator = "//div[@class='schema-product__hot']";
    const electroCatalogItemLocator = "//span[contains(text(),'Электроника')]";
    const waitValue = 2000;
    const minValue = "45";
    const maxValue = "80";
    const newsLabelLocator = "//div[contains(text(),'Новинка')]";

    beforeEach(async () => {

        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.onliner.by/");
        await driver.sleep(1000);

    });

    afterEach(async () => {
        driver.quit();
    });

    test("Check user can open Catalog", async () => {
        const catalogBtn = await driver.findElement(By.xpath(catalogButonLocator));
        await catalogBtn.click();
        const calssifierLbl = await driver.findElement(By.xpath("//ul[@class='catalog-navigation-classifier ']"));
        await driver.wait(until.elementIsVisible(calssifierLbl));
        expect(await calssifierLbl.isDisplayed).toBeTruthy();

    })

    /* test("Check filter by price is working as expected", async () => {
         const catalogBtn = await driver.findElement(By.xpath(catalogButonLocator));
         await catalogBtn.click();
         const classifierItem = await driver.findElement(By.xpath(electroCatalogItemLocator));
         classifierItem.click();
         const catalogItem = await driver.findElement(By.xpath(mobilePhoneCatalogItemLocator));
         await driver.wait(until.elementIsVisible(catalogItem));
         //await catalogItem.click();
         await driver.actions()
             .click(driver.findElement(By.xpath(mobilePhoneCatalogItemLocator)))
             .perform();
         await driver.sleep(2000);
         const chargingBtn = await driver.findElement(By.xpath(chargeCatalogItemLocator));
         await driver.wait(until.elementIsVisible(chargingBtn));
         await chargingBtn.click();
         const priceFromBtn = await driver.findElement(By.xpath(fromPriceFilterLocator));
         await driver.wait(until.elementIsVisible(priceFromBtn));
         await priceFromBtn.sendKeys(minValue);
         await driver.sleep(2000);
         const priceToBtn = await driver.findElement(By.xpath(toPriceFilterLocator));
         await driver.wait(until.elementIsVisible(priceToBtn));
         await priceToBtn.sendKeys(maxValue );
         await driver.sleep(2000);
         let prices: number[];
         let priceLabels: WebElement[] = await driver.findElements(By.xpath(priceProductLabelLocator));
         console.log(priceLabels.length)
         priceLabels.map(async (value: WebElement) => {
             let textValue = await value.getText();
             console.log(textValue);
             let dataValue = textValue.substring(textValue.indexOf(" "), textValue.indexOf("р") - 2);
             console.log(dataValue);
             prices.push(Number.parseFloat(dataValue));
         })
         console.log(prices);
     })   */

    test("Check correct message appears upon imputting not existing value", async () => {
        const catalogBtn = await driver.findElement(By.xpath(catalogButonLocator));
        await catalogBtn.click();
        const classifierItem = await driver.findElement(By.xpath(electroCatalogItemLocator));
        await driver.wait(until.elementIsVisible(classifierItem), waitValue);
        classifierItem.click();
        const catalogItem = await driver.findElement(By.xpath(mobilePhoneCatalogItemLocator));
        await driver.wait(until.elementIsVisible(catalogItem), waitValue);
        await driver.actions()
            .click(driver.findElement(By.xpath(mobilePhoneCatalogItemLocator)))
            .perform();
        const chargingBtn = await driver.findElement(By.xpath(chargeCatalogItemLocator));
        await driver.wait(until.elementIsVisible(chargingBtn), waitValue);
        await chargingBtn.click();
        const priceFromBtn = await driver.findElement(By.xpath(fromPriceFilterLocator));
        await driver.wait(until.elementIsVisible(priceFromBtn), waitValue);
        await priceFromBtn.sendKeys(maxValue);
        const priceToBtn = await driver.findElement(By.xpath(toPriceFilterLocator));
        await driver.wait(until.elementIsVisible(priceToBtn), waitValue);
        await priceToBtn.sendKeys(minValue);
        const noMessageLbl = await driver.findElement(By.xpath(noProductsMessageLocator));
        await driver.wait(until.elementIsVisible(noMessageLbl), waitValue);
        expect(await noMessageLbl.isDisplayed()).toBeTruthy();
    })

    test("Check filter for Prime is working as expected", async () => {
        const catalogBtn = await driver.findElement(By.xpath(catalogButonLocator));
        await catalogBtn.click();
        const classifierItem = await driver.findElement(By.xpath("//span[contains(text(),'Электроника')]"));
        classifierItem.click();
        const catalogItem = await driver.findElement(By.xpath(mobilePhoneCatalogItemLocator));
        await driver.wait(until.elementIsVisible(catalogItem));
        await driver.actions()
            .click(await driver.findElement(By.xpath(mobilePhoneCatalogItemLocator)))
            .perform();
        const chargingBtn = await driver.findElement(By.xpath(chargeCatalogItemLocator));
        await driver.wait(until.elementIsVisible(chargingBtn), waitValue);
        await chargingBtn.click();
        const primeChk = await driver.findElement(By.xpath(primeProductsCheckBoxLocator));
        await driver.wait(until.elementIsVisible(primeChk), waitValue);
        await primeChk.click();
        await driver.wait(until.urlContains("is_prime=1"), waitValue);
        const products = await driver.findElements(By.xpath(productItemLocator));
        const primersLabels = await driver.findElements(By.xpath(primeLblLocator));
        expect(products.length).toEqual(primersLabels.length);
    })

    test("Check super price check box working", async () => {
        const catalogBtn = await driver.findElement(By.xpath(catalogButonLocator));
        await catalogBtn.click();
        const classifierItem = await driver.findElement(By.xpath(electroCatalogItemLocator));
        await classifierItem.click();
        const catalogItem = await driver.findElement(By.xpath(mobilePhoneCatalogItemLocator));
        await driver.wait(until.elementIsVisible(catalogItem));
        await driver.actions()
            .click(await driver.findElement(By.xpath(mobilePhoneCatalogItemLocator)))
            .perform();
        const chargingBtn = await driver.findElement(By.xpath(chargeCatalogItemLocator));
        await driver.wait(until.elementIsVisible(chargingBtn), waitValue);
        await chargingBtn.click();
        const superPriceChk = await driver.findElement(By.xpath(superPriceProductsCheckBoxLocator));
        await driver.wait(until.elementIsVisible(superPriceChk), waitValue);
        await superPriceChk.click();
        await driver.wait(until.urlContains("on_sale=1"), waitValue);
        const products = await driver.findElements(By.xpath(productItemLocator));
        const superPriceLabels = await driver.findElements(By.xpath(superPriceLblLocator));
        expect(products.length).toEqual(superPriceLabels.length);
    })

    test("Check News check box working", async () => {
        const catalogBtn = await driver.findElement(By.xpath(catalogButonLocator));
        await catalogBtn.click();
        const classifierItem = await driver.findElement(By.xpath(electroCatalogItemLocator));
        await classifierItem.click();
        const catalogItem = await driver.findElement(By.xpath(mobilePhoneCatalogItemLocator));
        await driver.wait(until.elementIsVisible(catalogItem));
        await driver.actions()
            .click(await driver.findElement(By.xpath(mobilePhoneCatalogItemLocator)))
            .perform();
        const chargingBtn = await driver.findElement(By.xpath(chargeCatalogItemLocator));
        await driver.wait(until.elementIsVisible(chargingBtn), waitValue);
        await chargingBtn.click();
        const newsChk = await driver.findElement(By.xpath(newsLocator));
        await driver.wait(until.elementIsVisible(newsChk), waitValue);
        await newsChk.click();
        await driver.wait(until.urlContains("sticker_new_product=1"), waitValue);
        const products = await driver.findElements(By.xpath(productItemLocator));
        const newslabels = await driver.findElements(By.xpath(newsLabelLocator));
        expect(products.length).toEqual(newslabels.length);
    })


})