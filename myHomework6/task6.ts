type iUser = {
    login: string,
    password: string,
}

function createUser(login: string, password: string): iUser {
    const createdUser: iUser = {
        login: login,
        password: password
    }
    return createdUser;
}

function validateUser(login: string, password: string, user: iUser) {
    if (login === user.login && password === user.password) {
        console.log("Добро пожалоВать");
    }
    else {
        console.log("You are not expected user. Get out from here");
    }
}

let myUser = createUser("loginm", "password");
validateUser("login", "password", myUser);



