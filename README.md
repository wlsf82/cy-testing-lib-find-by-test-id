# cy-testing-lib-find-by-test-id

![Cypress tests](https://github.com/wlsf82/cy-testing-lib-find-by-test-id/actions/workflows/ci.yml/badge.svg)

Sample project to demonstrate the usage of the [`cy.findByTestId()`](https://testing-library.com/docs/queries/bytestid/) command of the [ @testing-library/cypress](https://www.npmjs.com/package/@testing-library/cypress) lib.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.19.2` of Node.js and npm, respectively. I suggest you use the same or later LTS versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

> First, you need to create a file called `cypress.env.json`, based on the [`cypress.env.example.json`](./cypress.env.example.json) file.

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open the Cypress App and run the tests in interactive mode.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
