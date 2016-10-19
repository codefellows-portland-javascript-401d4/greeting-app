# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added

## [1.2.1] - 2016-10-18
### Added
- A travis.myl file to have auto-checking on github.

## [1.2.0] - 2016-10-18
### Release
- Greeter now takes optional titles as command-line arguments.

## [1.1.3] - 2016-10-18
### Added
- Test for command line title flags now pass.

## [1.1.2] - 2016-10-18
### Changed
- Moved the testing content to match the new file structure of the project.

## [1.1.1] - 2016-10-18
### Added
- Mocha and Chai as developer dependencies to allow for running tests.
- Tests to ensure the titles work properly.

## [1.1.0] - 2016-10-18
### Added
- Commander package to enable use of command-line flags.
- Program now has trans-friendly salutations!

## [1.0.1] - 2016-10-18
### Added
- Added this changelog.
- Added a package.json and build instructions for the package.

## [1.0.0] - 2016-10-18
### Release
- Basic greeting and testing functionality completed, releasing 1.0!

## [0.1.5] - 2016-10-18
### Changed
- Modified greeter.test.js to use better Mocha style using Describe blocks.

## [0.1.4] - 2016-10-17
### Added
- A test to greeter.test.js for testing command line input. All tests pass.

## [0.1.3] - 2016-10-17
### Changed
- Renamed the tests to greeter.test.js to match JavaScript conventions.

## [0.1.2] - 2016-10-17
### Changed
- Updated the linter to not check for Mocha or Node keywords.
- Removed the test calls inside greeter.js to enable independent testing.

## [0.1.1] - 2016-10-17
### Added
- A test file test_greeter.js to simulate input: passes for passed in and default behavior.

## [0.1.0] - 2016-10-17
### Added
- greeter.js can take input (passed in as an argument to sayHello) and greet appropriately.
- When not passed a name, sayHello will default to salutation + !
- greeter.js can take arguments passed via the command line and will pass the relevant portions to sayHello.

## [0.0.2] - 2016-10-17
### Added
- A linter to the project.

## [0.0.1] - 2016-10-17
### Forked
- Forked project from https://github.com/codefellows-portland-javascript-401d3/greeting-app/


