"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const {id, psword} =UserStorage.getUsers("id", "psword");
        
        if (id === this.body.id && psword === this.body.psword) {
            
        }
    }
}

module.exports = User;