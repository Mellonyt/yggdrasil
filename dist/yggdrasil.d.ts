/**
 * Thanks to wiki.vg.
 */
import { AuthenticateScheme, SignoutScheme, RefreshScheme, ValidateScheme, InvalidateScheme } from './schemes';
/**
 * Authenticates a user using their password.
 * @param payload sends a JSON format to the server.
 * @returns Returns a response with the authentication data.
 */
export declare function authenticate(payload: AuthenticateScheme): void;
/**
 * Invalidates 'acessToken' using an account's username and password.
 * @param payload sends a JSON format to the server.
 * @returns Returns an empty payload if successful.
 */
export declare function signout(payload: SignoutScheme): void;
/**
 * Refreshes a valid 'accessToken'.
 * It can be used to keep a user logged in between gaming sessions and is preferred over storing the user's password in a file
 * @param payload sends a JSON format to the server.
 */
export declare function refresh(payload: RefreshScheme): void;
/**
 * Checks if an accessToken is usable for authentication with a Minecraft server.
 * @param payload sends a JSON format to the server.
 * @returns Returns an empty payload '204 No Content' if successful, an error JSON with status '403 Forbidden' otherwise.
 */
export declare function validate(payload: ValidateScheme): void;
/**
 * Invalidates 'accessToken' using an account's username and password.
 * @param payload sends a JSON format to the server.
 *
 * @returns Returns an empty payload if successful.
 */
export declare function invalidate(payload: InvalidateScheme): void;
