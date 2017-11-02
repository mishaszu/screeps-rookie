# Mishaszu screeps script

My own gameplay.

## how to

1) add screeps-rookie to your project
```
const sRookie = require('screep-rookies')
```
2) pass paramaters to funcstion

```
sRookie.send(path, creditionals)
```
where:
- path: is path to directory where branch modules are stored. Name branch directory as branch
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

## example

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