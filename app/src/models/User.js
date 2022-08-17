"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body
        const {id, psword} = UserStorage.getUserInfo(body.id);
        
        if (id) {
            if (id === body.id && psword === body.psword) {
                return {success : true};
            }
            return {success : false, msg : "아이디 혹은 비밀번호가 계정정보와 일치하지 않습니다."}
        }
        return {success : false, msg : "아이디 혹은 비밀번호가 계정정보와 일치하지 않습니다."}

    }
}

module.exports = User;