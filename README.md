
# Yggdrasil

![NPM](https://img.shields.io/npm/l/yggdrasil)  ![GitHub package.json version](https://img.shields.io/github/package-json/v/landstorm/yggdrasil)


Minecraft 1.6 introduced a new authentication scheme called **Yggdrasil** which completely replaces the [previous authentication system](https://wiki.vg/Legacy_Authentication "Legacy Authentication"). Mojang's other game, Scrolls, uses this method of authentication as well. Mojang has said that [this authentication system should be used by everyone for custom logins](https://twitter.com/KrisJelbring/status/453573406341206016), but [credentials should never be collected from users](https://twitter.com/KrisJelbring/status/461390585086361600).


# Using

### Authenticate
Authenticates a user using their password.

```ts
const user = authenticate({
  agent:  {
	name:  'Minecraft',
	version:  1 // Can be increased
  },
  username:  'account@server.com', // e-mail if migrated
  password:  'password',
  requestUser:  true // required
})
```
Returns a response with the authentication data. 

### Signout
Invalidates *acessToken* using an account's username and password.

```ts
signout({
  username:  'account@server.com', // e-mail if migrated
  password:  'password',
})
```
Returns an empty payload if successful.

### Refresh

Refreshes a valid *accessToken*.

```ts
refresh({
  acessToken: 'asdfsadfagd', // valid acess token
  clientToken: 'asdasdasfdasf', // valid client token
  selectedProfile: {
	id: 'aewawdas', // valid id,
	name: 'Bluserter_12323' // nick
  },
  requestUser: true // required, can be changed
})
```

### Validate
Checks if an *accessToken* is usable for authentication with a Minecraft server.

```ts
validate({
  accessToken: 'asdfsafdsaf', // valid access token
  clientToken: 'adsfsadf4r53' // valid client token
})
```
Returns an empty payload *204 No Content* if successful, an error JSON with status *403 Forbidden* otherwise.

### Invalidate
Invalidates *accessToken* using an account's username and password.

```ts
invalidate({
  accessToken: 'adsadsdasfd', // valid access token
  clientToken: '423983929123', // valid client token
})
```
Returns an empty payload if successful.

### created by [Landstorm](https://github.com/landstorm).

## References

[Thanks to Wiki.vg](https://wiki.vg/Authentication).
[Node.JS](https://nodejs.org)
[TypeScript](https://www.typescriptlang.org/)

