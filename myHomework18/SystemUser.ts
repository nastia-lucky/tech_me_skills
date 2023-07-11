export class SystemUser {

    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;

    constructor(id: number, email: string, first_name: string, last_name: string, avatar: string) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }

    get ID() {
        return this.id;
    }

    get Email() {
        return this.email;
    }

    get FirstName() {
        return this.first_name;
    }

    get LastName() {
        return this.last_name;
    }

    get Avatar() {
        return this.avatar;
    }

}