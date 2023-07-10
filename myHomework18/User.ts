export class User {

    name: string;
    job: string;

    constructor(name: string, job: string) {
        this.name = name;
        this.job = job;
    }

    get Name() {
        return this.name;
    }

    get Job() {
        return this.job;
    }
}