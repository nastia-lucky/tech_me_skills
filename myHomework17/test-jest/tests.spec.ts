import Calculator from "../../myHomework16/Calculator"


describe("Calculator tests", () => {
    test("Check addition of integer numbers ", () => {
        let param1 = 4;
        let param2 = 5;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        expect(expectedResult).toEqual(actualResult);
    })


    test("Check addition of integer numbers with null ", () => {
        let param1 = 4;
        let param2 = null;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + 0;
        expect(expectedResult).toEqual(actualResult);
    })

    test("Check addition of float numbers", () => {
        let param1 = 6.8;
        let param2 = 500.7;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        expect(expectedResult).toEqual(actualResult);
    })

    test("Check addition of negative numbers", () => {
        let param1 = -9;
        let param2 = 90;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        expect(expectedResult).toEqual(actualResult);
    })

    test("Check substract of negative numbers", () => {
        let param1 = 90;
        let param2 = 56;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        expect(expectedResult).toEqual(actualResult);
    })

    test("Check substract of float numbers", () => {
        let param1 = 9099999.89;
        let param2 = 56.66666;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        expect(expectedResult).toEqual(actualResult);
    })

    test("Check substract of negative numbers", () => {
        let param1 = -9876;
        let param2 = 98776;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        expect(expectedResult).toEqual(actualResult);
    })

    test("Check substract numbers with zero", () => {
        let param1 = -9876;
        let param2 = 0;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        expect(expectedResult).toEqual(actualResult);
    })

    test("Check multiply numbers with zero", () => {
        let param1 = 897;
        let param2 = 0;
        let actualResult = Calculator.doMultiply(param1, param2);
        let expectedResult = param1 * param2;
        expect(expectedResult).toEqual(actualResult);
    })

    test("Check division numbers with zero", () => {
        let param1 = 897;
        let param2 = 0;
        let actualResult = Calculator.getRemainderDivision(param1, param2);
        expect(actualResult).toBeNaN;
    })

    test("Check division numbers with zero", () => {
        let param1 = -9876;
        let param2 = undefined;
        let actualResult = Calculator.doSubstract(param1, param2);
        expect(actualResult).toBeNaN;
    })
})

