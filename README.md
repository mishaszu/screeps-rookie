# Build and deploy script for Screeps

Manage your files locally, separate to different folders and send to your screeps account.

## how to

Add tool to your project:
```
const sRookie = require('screep-rookies')
```

There 2 ways to manage your projet:
### Flat folder structure
1) pass paramaters to funcstion

```
sRookie.networkSend(path, creditionals)
```
where:
- path: is path to directory where branch modules are stored. Name branch directory as your screeps branch
- creditionals: object with
  - email
  - password
```
{
  email: youremail,
  password: yourpassword
}
```
**BEWARE: Remember to not push your creditionals to remote repository. You should add file with creditionals to .gitignore**

### Nested folder structure
Enable to create nested structure that will be flatten.
```
sRookie.networkLunch(sourceFolder, buildFolder, branch, config)
```
where:
- sourceFolder: is path to folder with all your branches
- buildFolder: is path to folder where all your builded branches will be stored
- branch: branch name
- config: object with
  - email
  - password

You should place `main.js` in root of your branch directory.
All files in subfolders will be merged to the one object with name of branche's root directory subfolder. You need to write your files like part of object.

Example directory structure:
- main.js
- roles
  - harvester.js

input files:
main.js:
```
const Roles = require('roles');
module.exports.loop = function() {
...
Roles.run(creep);
}
```
harvester.js:
```
run: function(creep) {
  console.log(creep);
},
```

Output would be:
main.js:
```
const Roles = require('roles');
module.exports.loop = function() {
...
Roles.run(creep);
}
```
roles.js:
```
module.exports = {

run: function(creep) {
  console.log(creep);
},

}
```

*note
Don't forget about commas as your subfiles content will be part of object after build*

## examples

```
const sRookie = require('screep-rookies')

sRookie.send(
  __dirname + '/testdir/default',
  {
    email: tester,
    password: testerpass
  }
)
```