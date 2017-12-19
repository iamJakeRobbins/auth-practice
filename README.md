Welcome, agent!
Great work on your last mission. Unfortunately, our database was hacked, and none of the passwords were encrypted. Lost a lot of good men. We need you to build a similar site, but this time we need to make sure the passwords are hashed. Also, instead of putting our secrets online, we need you to put them into a file on the user's computer.
Here's the bones of it. We need:
- A way for agents to create an account on our new portal. We've built a form, but we don't know what to do with it.
- Their passwords must be encrypted.
- An existing user should be able to sign in only if they have the correct identification and password
- Upon successful login, the app should make an API call and write the specified data into a new file using fs.writeFile
