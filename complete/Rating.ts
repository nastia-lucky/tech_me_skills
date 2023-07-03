export class Rating {

    private rate: number;
    private count: number;

    constructor(rate: number, count: number) {
        this.rate = rate;
        this.count = count;
    }

    get Count() {
        return this.count;
    }

    get Rate() {
        return this.rate;
    }

}