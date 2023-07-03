import Calculator from "./Calculator";


export class Tests {


    static getMessage(isResultAsExpected: boolean) {
        if (isResultAsExpected === true) {
            console.log("Test is passed")
        }
        else {
            console.log("Test is failed")
        }
    }

    static checkAdditionIntegerNumbers() {
        let param1 = 4;
        let param2 = 5;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }

    static checkAdditionNumbersWithNull() {
        let param1 = 4;
        let param2 = null;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + 0;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }

    static checkAdditionFloatNumbers() {
        let param1 = 6.8;
        let param2 = 500.7;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }

    static checkAdditionNegativeNumbers() {
        let param1 = -9;
        let param2 = 90;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }

    static checkSubstractIntegerNumbers() {
        let param1 = 90;
        let param2 = 56;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }

    static checkSubstractFloatNumbers() {
        let param1 = 9099999.89;
        let param2 = 56.66666;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }

    static checkSubstractNegativeNumbers() {
        let param1 = -9876;
        let param2 = 98776;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }

    static checkSubstractNumbersWithZero() {
        let param1 = -9876;
        let param2 = 0;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }

    static checkMultiplyNumbersWithZero() {
        let param1 = 897;
        let param2 = 0;
        let actualResult = Calculator.doMultiply(param1, param2);
        let expectedResult = param1 * param2;
        let isResultAsExpected = actualResult === expectedResult;
        this.getMessage(isResultAsExpected);
    }



    static checkDivisionNumbersWithZero() {
        let param1 = 897;
        let param2 = 0;
        let isResultAsExpected = Number.isNaN(Calculator.getRemainderDivision(param1, param2));
        this.getMessage(isResultAsExpected);
    }

    static checkSubstractNumbersWithUnderfined() {
        let param1 = -9876;
        let param2 = undefined;
        let isResultAsExpected = Number.isNaN(Calculator.doSubstract(param1, param2));
        this.getMessage(isResultAsExpected);
    }



}