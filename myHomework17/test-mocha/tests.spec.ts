import Calculator from "../../myHomework16/Calculator";
import Mocha = require("mocha");
import chai = require("chai");

describe("Calculator mocha tests", () => {

    let myCalculator: Calculator;

    before("Initialize calculator", async function () {
        myCalculator = new Calculator();
    })

    it("Test of addition integer numbers", () => {
        let param1 = 4;
        let param2 = 5;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        chai.expect(actualResult).be.equal(expectedResult);
    })


    it("Test of addition numbers with null", () => {
        let param1 = 4;
        let param2 = null;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + 0;
        chai.expect(actualResult).be.equal(expectedResult);

    })

    it("Test of addition float numbers", () => {
        let param1 = 6.8;
        let param2 = 500.7;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        chai.expect(actualResult).be.equal(expectedResult);
    })

    it("Test of addition negative numbers", () => {
        let param1 = -9;
        let param2 = 90;
        let actualResult = Calculator.doAdd(param1, param2);
        let expectedResult = param1 + param2;
        chai.expect(actualResult).be.equal(expectedResult);
    })

    it("Test of substract integer numbers", () => {
        let param1 = 90;
        let param2 = 56;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        chai.expect(actualResult).be.equal(expectedResult);
    })

    it("Test of substract float numbers", () => {
        let param1 = 9099999.89;
        let param2 = 56.66666;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        chai.expect(actualResult).be.equal(expectedResult);
    })

    it("Test of substract negative numbers", () => {
        let param1 = -9876;
        let param2 = 98776;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        chai.expect(actualResult).be.equal(expectedResult);
    })

    it("Test of substract numbers with zero", () => {
        let param1 = -9876;
        let param2 = 0;
        let actualResult = Calculator.doSubstract(param1, param2);
        let expectedResult = param1 - param2;
        chai.expect(actualResult).be.equal(expectedResult);
    })

    it("Test of multiply numbers with zero", () => {
        let param1 = 897;
        let param2 = 0;
        let actualResult = Calculator.doMultiply(param1, param2);
        let expectedResult = param1 * param2;
        chai.expect(actualResult).be.equal(expectedResult);
    })

    it("Test of division  numbers by zero", () => {
        let param1 = 897;
        let param2 = 0;
        chai.expect(Calculator.getRemainderDivision(param1, param2)).NaN;
    })

    it("Test of division  numbers by zero", () => {
        let param1 = -9876;
        let param2 = undefined;
        chai.expect(Calculator.doSubstract(param1, param2)).NaN;
    })

})