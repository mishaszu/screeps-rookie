# Mishaszu screeps script

My own gameplay.


## stable

Branch with working game version

## add configuration
create **credi.js** file in main directory and add:
```
module.exports = {
  mail: yourmail,
  pas: yourpassword
}
```

## adding branches

- add folder to directory:
name it as branch
```
node-lib/branches
```
- add folder to manifest **node-lib/branches/index.js**
```
exports.branches {
  defulat: true,
  yourbranch: true
}
```
- add npm script to **package.json**
```
"scripts": {
  "default": "node send.js default",
  "yourbranch", "node sens.js yourbranch"
}
- send your branch typing in console
```
npm run yourbranch
```