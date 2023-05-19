function getCreditMoney(a: number): number {
    let overpay: number = 0
    let period: number=5;
    let payment: number=a/period;

    for (let i = 1; i <= period; i++) {
        overpay = overpay + (a * 0.17);
        a = a - payment;
    }
    return overpay;

}

console.log(getCreditMoney(100))

