"use strict";

class UserStorage {
    static #users = {
        id: ["Gomayang", "JJJPK", "Admin"],
        psword: ["1234", "1234", "123456"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id) {
        
    }
}

module.exports = UserStorage;