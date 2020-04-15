"use strict";
/**
 * Thanks to wiki.vg.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
const err = chalk_1.default.bold.red;
const ok = chalk_1.default.bold.green;
//https://authserver.mojang.com/
/**
 * Authenticates a user using their password.
 * @param payload sends a JSON format to the server.
 * @returns Returns a response with the authentication data.
 */
function authenticate(payload) {
    axios_1.default
        .post('https://authserver.mojang.com/authenticate', payload)
        .then((res) => {
        if (res.status == 200) {
            console.log(`${ok('OK')} in https://authserver.mojang.com/authenticate`);
            return res.data;
        }
    })
        .catch((error) => {
        console.log(`${err('failure')} ${error.response.data.error} ${err('on')} https://authserver.mojang.com/authenticate`);
    });
}
exports.authenticate = authenticate;
/**
 * Invalidates 'acessToken' using an account's username and password.
 * @param payload sends a JSON format to the server.
 * @returns Returns an empty payload if successful.
 */
function signout(payload) {
    axios_1.default
        .post('https://authserver.mojang.com/signout', payload)
        .then((res) => {
        if (res.status == 204)
            console.log(`${ok('OK')} in https://authserver.mojang.com/signout`);
    })
        .catch((error) => {
        console.log(`${err('failure')} ${error.response.data.error} ${err('on')} https://authserver.mojang.com/signout`);
    });
}
exports.signout = signout;
/**
 * Refreshes a valid 'accessToken'.
 * It can be used to keep a user logged in between gaming sessions and is preferred over storing the user's password in a file
 * @param payload sends a JSON format to the server.
 */
function refresh(payload) {
    axios_1.default
        .post('https://authserver.mojang.com/refresh', payload)
        .then((res) => {
        if (res.status == 200) {
            console.log(`${ok('OK')} in https://authserver.mojang.com/refresh`);
            return res.data;
        }
    })
        .catch((error) => {
        console.log(`${err('failure')} ${error.response.data.error} ${err('on')} https://authserver.mojang.com/refresh`);
    });
}
exports.refresh = refresh;
/**
 * Checks if an accessToken is usable for authentication with a Minecraft server.
 * @param payload sends a JSON format to the server.
 * @returns Returns an empty payload '204 No Content' if successful, an error JSON with status '403 Forbidden' otherwise.
 */
function validate(payload) {
    axios_1.default
        .post('https://authserver.mojang.com/validate', payload)
        .then((res) => {
        if (res.status == 200) {
            console.log(`${ok('OK')} in https://authserver.mojang.com/validate`);
            return res.data;
        }
    })
        .catch((error) => {
        console.log(`${err('failure')} ${error.response.data.error} ${err('on')} https://authserver.mojang.com/validate`);
    });
}
exports.validate = validate;
/**
 * Invalidates 'accessToken' using an account's username and password.
 * @param payload sends a JSON format to the server.
 *
 * @returns Returns an empty payload if successful.
 */
function invalidate(payload) {
    axios_1.default
        .post('https://authserver.mojang.com/invalidate', payload)
        .then((res) => {
        if (res.status == 200) {
            console.log(`${ok('OK')} in https://authserver.mojang.com/invalidate`);
            return res.data;
        }
    })
        .catch((error) => {
        console.log(`${err('failure')} ${error.response.data.error} ${err('on')} https://authserver.mojang.com/invalidate`);
    });
}
exports.invalidate = invalidate;
