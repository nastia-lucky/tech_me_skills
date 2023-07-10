import superagent, { SuperAgent } from "superagent";
import { SystemUser } from "./SystemUser";
import { User } from "./User";

describe("Users creation tests", () => {

    let response;
    const url = "https://reqres.in/api/users/";
    let users: SystemUser[] = new Array();
    let randomSystemUser: SystemUser;
    let randomSystemUserId: number;
    let createdUser = new User("John " + Math.random().toString(36).substring(2, 5), "builder");
    let updatedUserInfo = new User("Valya", "housework");

    beforeEach(async () => {
        try {
            response = await superagent.get(url);
            response.body.data.forEach((value,) => {
                let user = new SystemUser(value.id, value.email, value.first_name, value.last_name, value.avatar);
                users.push(user);
            })
            randomSystemUser = users[Math.floor(Math.random() * users.length)];
            randomSystemUserId = randomSystemUser.ID;
        }
        catch (error: any) {
            console.log(error.message())
        };

    });

    test("Check 201 is returned after new user creation", async () => {
        response = await superagent.post(url)
            .send(createdUser);
        expect(response.statusCode).toBe(201);

    })

    test("Check created user appears in the list of users", async () => {
        response = await superagent.post(url)
            .send(createdUser);
        let myUser = users.find((value) => {
            value.FirstName === createdUser.Name;
        })
        expect(myUser).not.toBeUndefined;
    })

    test("Check 200 status code is returned for getting all users", async () => {
        response = await superagent.get(url)
        expect(response.statusCode).toBe(200);
    })

    test("Check there are users in database", async () => {
        response = await superagent.get(url)
        expect(response.body.data.length).toBeGreaterThan(0);
    })

    test("Check correct info is returned for user details", async () => {
        let response = await superagent.get(url + randomSystemUserId);
        let gotUser: SystemUser = new SystemUser(response.body.data.id, response.body.data.email, response.body.data.first_name, response.body.data.last_name, response.body.data.avatar);
        expect(gotUser).toStrictEqual(randomSystemUser);
    })

    test("Check 200 status code is returned for user details", async () => {
        let response = await superagent.get(url + randomSystemUserId);
        expect(response.statusCode).toBe(200);
    })

    test("Check 204 response code is returned upon user deletion", async () => {
        let response = await superagent.delete(url + randomSystemUserId);
        expect(response.statusCode).toBe(204);
    })

    test("Check 404 is returned upon getting deleted user details", async () => {
        let response = await superagent.delete(url + randomSystemUserId);
        response = await superagent.get(url + randomSystemUserId);
        expect(response.statusCode).toBe(404);
    })

    test("Check 200 code returned upon user update", async () => {
        let response = await superagent.put(url + randomSystemUserId)
            .send(updatedUserInfo);
        expect(response.statusCode).toBe(200);
    })

    test("Check new user details is returned upon update user details", async () => {
        let response = await superagent.put(url + randomSystemUserId)
            .send(updatedUserInfo);
        response = await superagent.get(url + randomSystemUserId);
        expect(response.body.data.first_name).toBe(updatedUserInfo.Name);
    })
})