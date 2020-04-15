/**
 * Thanks to wiki.vg.
 */

import axios from 'axios'
import chalk from 'chalk'
import {
  AuthenticateScheme,
  SignoutScheme,
  RefreshScheme,
  ValidateScheme,
  InvalidateScheme,
} from './schemes'

const err = chalk.bold.red
const ok = chalk.bold.green

//https://authserver.mojang.com/

/**
 * Authenticates a user using their password.
 * @param payload sends a JSON format to the server.
 * @returns Returns a response with the authentication data.
 */
export function authenticate(payload: AuthenticateScheme) {
  axios
    .post('https://authserver.mojang.com/authenticate', payload)
    .then((res) => {
      if (res.status == 200) {
        console.log(`${ok('OK')} in https://authserver.mojang.com/authenticate`)
        return res.data
      }
    })
    .catch((error) => {
      console.log(
        `${err('failure')} ${error.response.data.error} ${err(
          'on'
        )} https://authserver.mojang.com/authenticate`
      )
    })
}

/**
 * Invalidates 'acessToken' using an account's username and password.
 * @param payload sends a JSON format to the server.
 * @returns Returns an empty payload if successful.
 */
export function signout(payload: SignoutScheme) {
  axios
    .post('https://authserver.mojang.com/signout', payload)
    .then((res) => {
      if (res.status == 204)
        console.log(`${ok('OK')} in https://authserver.mojang.com/signout`)
    })
    .catch((error) => {
      console.log(
        `${err('failure')} ${error.response.data.error} ${err(
          'on'
        )} https://authserver.mojang.com/signout`
      )
    })
}

/**
 * Refreshes a valid 'accessToken'.
 * It can be used to keep a user logged in between gaming sessions and is preferred over storing the user's password in a file
 * @param payload sends a JSON format to the server.
 */
export function refresh(payload: RefreshScheme) {
  axios
    .post('https://authserver.mojang.com/refresh', payload)
    .then((res) => {
      if (res.status == 200) {
        console.log(`${ok('OK')} in https://authserver.mojang.com/refresh`)
        return res.data
      }
    })
    .catch((error) => {
      console.log(
        `${err('failure')} ${error.response.data.error} ${err(
          'on'
        )} https://authserver.mojang.com/refresh`
      )
    })
}

/**
 * Checks if an accessToken is usable for authentication with a Minecraft server.
 * @param payload sends a JSON format to the server.
 * @returns Returns an empty payload '204 No Content' if successful, an error JSON with status '403 Forbidden' otherwise.
 */
export function validate(payload: ValidateScheme) {
  axios
    .post('https://authserver.mojang.com/validate', payload)
    .then((res) => {
      if (res.status == 200) {
        console.log(`${ok('OK')} in https://authserver.mojang.com/validate`)
        return res.data
      }
    })
    .catch((error) => {
      console.log(
        `${err('failure')} ${error.response.data.error} ${err(
          'on'
        )} https://authserver.mojang.com/validate`
      )
    })
}

/**
 * Invalidates 'accessToken' using an account's username and password.
 * @param payload sends a JSON format to the server.
 *
 * @returns Returns an empty payload if successful.
 */
export function invalidate(payload: InvalidateScheme) {
  axios
    .post('https://authserver.mojang.com/invalidate', payload)
    .then((res) => {
      if (res.status == 200) {
        console.log(`${ok('OK')} in https://authserver.mojang.com/invalidate`)
        return res.data
      }
    })
    .catch((error) => {
      console.log(
        `${err('failure')} ${error.response.data.error} ${err(
          'on'
        )} https://authserver.mojang.com/invalidate`
      )
    })
}
