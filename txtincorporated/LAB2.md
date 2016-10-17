![cf](http://i.imgur.com/7v5ASc8.png)  Lab 02: Build Tools
===

## Description:

This work is to be done as a continuation of your fork of the `greeting-app` assignment.

__Before coding this lab, first create version `1.0.0` and commit so you have a baseline for CHANGELOG.md__
 
For this assignment you will add the following:
  * Dependency tracking via npm and package.json. 
  * Enhance your greeting features. 
    * Use at least one third-party npm library, example: add icon/art/emoji greeting
    * Add at least one new option to the greet function
  * Automated build and development environent via npm scripts
  * changelog and semver "history":
    * the version from the previous lab is `v1.0.0`
    * break the work above into _at least_ 3 "releases"
    * Properly increment the semver according to the change in each "release"

The package.json file should include:
  * all the dependencies and dev devdependencies for the project.
  * npm scripts (ex: test, build, watch, dev, start)

The npm scripts should address:
  * a task to run the tests
  * running eslint
  * watch functionality (only watches .js files) to run linting and testing

## Bonus **3pts**  
Add to core library and cli:
* solicit input and respond with second greeting that includes input.
* Add appropriate cli and unit tests. 

## Rubric:

* Code Organization and Quality: 3pts
* package.json: 2pts
* npm scripts: 2pts
* changelog/semver: 3pts
