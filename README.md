# Tsūka API

[![Latest Release](https://img.shields.io/badge/latest-0.1.0-lightgrey.svg?style=flat 'Latest Release')](https://github.com/rxseven/tsuuka-api/releases/tag/v0.1.0) [![Build Status](https://travis-ci.org/rxseven/tsuuka-api.svg?branch=master 'Build Status')](https://travis-ci.org/rxseven/tsuuka-api) [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/ 'CC BY-NC-ND 4.0') [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0 'AGPL v3')

**Tsūka API is an extremely simple REST API for converting currencies.** It was built from scratch using Node, Express, and TypeScript.

> Tsūka or 通貨 literally means “Currency” in Japanese and 通貨換算ツール (tsūka kansan tsūru) means “Currency Convertion Tool” or “Currency Converter”.

## Table of Contents

### Getting Started

- [Live Demo](#live-demo)
- [Configuring the Development Environment](#configuring-the-development-environment)

### Specifications

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Development Workflow](#development-workflow)
- [Third-party Services](#third-party-services)
- [Related Projects](#related-projects)

### Appendix

- [Development Milestones](#development-milestones)
- [Changelog](#changelog)
- [Acknowledgements](#acknowledgements)
- [Credits](#credits)
- [Licenses](#licenses)

## Live Demo

**Tsūka** is a React app running on **Heroku** at [https://tsuuka.herokuapp.com](https://tsuuka.herokuapp.com) and its **Storybook** (component library for Tsūka) is hosted on **Netlify** at [https://tsuuka.netlify.com](https://tsuuka.netlify.com).

> **App sleeping...** as Tsūka (React app) and its API (this repository) run on [Heroku’s free plan](https://www.heroku.com/free), when an app on Heroku has only one web dyno and that dyno doesn’t receive any traffic in 1 hour, the dyno goes to sleep. When someone accesses the app, the dyno manager will automatically wake up the web dyno to run the web process type. **This causes a short delay for this first request**, but subsequent requests will perform normally. For more information, see [App Sleeping on Heroku](https://blog.heroku.com/app_sleeping_on_heroku).

> **Monthly limit** as [Tsūka API](https://github.com/rxseven/tsuuka-api) gets current and historical foreign exchange (Forex) rates from [Fixer’s free plan](https://fixer.io/product), at which point **Tsūka API is restricted to making 1,000 API calls per month**. For more information, see [Fixer Plans](https://fixer.io/product).

[Back to top](#table-of-contents)

## Configuring the Development Environment

### Prerequisites

**Tools**

Before getting started, you are required to have or install the following tools on your machine:

- [Git](https://git-scm.com) _(v2.17.2\*)_
- [GNU Bash](https://www.gnu.org/software/bash/) _(v3.2.57\*)_
- [nvm](https://github.com/creationix/nvm/releases/tag/v0.33.5) _(v0.33.5\*)_ and [Node.js](https://nodejs.org/en/blog/release/v10.15.1/) _(v10.15.1\*)_
- [npm](https://github.com/npm/cli/releases/tag/v6.4.1) _(v6.4.1\*)_ or [Yarn](https://github.com/yarnpkg/yarn/releases/tag/v1.3.2) _(v1.3.2\*)_

Optional, but nice to have:

- [Visual Studio Code](https://code.visualstudio.com)\*\*
- [Postman](https://www.getpostman.com)\*\*

> Note: if you are using Mac running [macOS](https://en.wikipedia.org/wiki/MacOS) _(v10.12 Sierra\*)_, you are set with Git and GNU Bash.

> Note: this project has been pre-configured for use with Visual Studio Code.

**Software as a Service**

You also need to have to the following information beforehand:

- [Fixer API key](https://fixer.io/documentation) - a unique key assigned to each API account used to authenticate with the API.

### Setup

**1.** Clone Tsūka API from GitHub repository and change the current working directory:

```sh
git clone https://github.com/rxseven/tsuuka-api.git
cd tsuuka-api
```

**2.** Open the project with your editor of choice or with Visual Studio Code.

**3.** Switch to a specified Node version:

```sh
nvm use
```

**4.** Create `.env` file and add the configuration below:

```
FIXER_API_KEY=<YOUR_API_KEY>
```

Note: environment variables files are listed in [.gitignore](https://github.com/rxseven/tsuuka-api/blob/master/.gitignore#L58) file to ensure that they will not be tracked by the source control.

### Starting the development server

**1.** Start the development server by running the command below:

```sh
yarn start:watch
```

This command will first compile (build) source code written in TypeScript in `./src` directory to plain ES5 JavaScript using TypeScript compiler. Once the app was built to `./build` directory, Nodemon will then start the Express server and listen for incoming connections on port 5000.

> Note: this command will monitor for any changes and automatically re-compile source files and restart the server.

**2.** Open [http://localhost:5000/api/v1/gallery](http://localhost:5000/api/v1/gallery) in Postman or any HTTP client of choice.

> Tip: press `control + c` to stop the development server.

### Running tests

Run one of the following commands to run tests with [Jest](https://jestjs.io/) and [SuperTest](https://www.npmjs.com/package/supertest):

```sh
yarn test
yarn test:coverage
yarn test:watch
yarn test:watch:silent
yarn test:watch:verbose
```

> Note: Tsūka API v0.1.0 has not implemented any unit tests yet.

> Note: by default, when you run test in [watch mode](https://jestjs.io/docs/en/cli.html#watch), Jest will only run the tests related to files changed (modified) since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests in the project you have. However, you can also press `a` in the watch mode to force Jest to run all tests.

> Note: code coverage reports will be generated in the local [`./coverage`](https://jestjs.io/docs/en/configuration#coveragedirectory-string) directory. This directory is listed in [`.gitignore`](https://github.com/rxseven/tsuuka-api/blob/master/.gitignore#L18) file to ensure that it will not be tracked by the source control.

> Tip: press `control + c` to stop the running tests.

### Running code linting

Run one of the following commands to run code linting with [ESLint](https://eslint.org/):

```sh
yarn lint
yarn lint:fix
```

### Formatting code

Run the following command to format your code against [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/docs/rules/) rules:

```sh
yarn format
```

### Creating a production build

Run the command below to build the app for production:

```sh
yarn build
```

> Note: the production build will be created in the local `./build` directory. This directory is listed in [`.gitignore`](https://github.com/rxseven/tsuuka-api/blob/master/.gitignore#L74) file to ensure that it will not be tracked by the source control.

### Running the production build locally

**1.** Run the following commands respectively to create a production build and start the server locally:

```sh
yarn build
yarn start
```

**2.** Open [http://localhost:5000/api/v1/gallery](http://localhost:5000/api/v1/gallery) in Postman or any HTTP client of choice.

> Tip: press `control + c` to stop the server.

[Back to top](#table-of-contents)

## Features

- Fetch images
- Upload images
- Delete images

[Back to top](#table-of-contents)

## Technology Stack

- Node, Express, TypeScript
- CORS, Body-parser, .ENV, Lodash
- [More...](https://github.com/rxseven/tsuuka-api/blob/master/package.json)

> Note: Web application Tsūka can be found in [this repository](https://github.com/rxseven/tsuuka).

[Back to top](#table-of-contents)

## Development Workflow

- JavaScript compiling/transpiling with TypeScript
- TypeScript linting with ESLint
- Code formatting with Prettier
- Automate testing with Jest, SuperTest, and Nock
- Static type checking with TypeScript
- Pre-commit hooking with Husky and Lint-staged
- CI/CD with GitHub, Travis CI, and Heroku

[Back to top](#table-of-contents)

## Third-party Services

### Infrastructure

- [Heroku](https://www.heroku.com/) - cloud platform as a service

### Cloud computing and Platforms

- [Fixer](https://fixer.io) - API for current and historical foreign exchange (Forex) rates
- [REST Countries](https://restcountries.eu) - API for getting information about countries
- [Country Flags](https://countryflags.io) - API for loading any country flag

### Software as a Service

- [GitHub](https://github.com/) - web-based hosting service for version control using Git
- [Travis CI](https://travis-ci.org/) - continuous integration

[Back to top](#table-of-contents)

## Related Projects

**[Tsūka](https://github.com/rxseven/tsuuka)** - a simple React app for converting currencies.

[Back to top](#table-of-contents)

## Development Milestones

- Add unit tests
- Add request validation
- Optimize the app’s performance
- More...

[Back to top](#table-of-contents)

## Changelog

See [releases](https://github.com/rxseven/tsuuka-api/releases).

## Acknowledgements

Tsūka API is an open-source project built and maintained by [Theerawat Pongsupawat](https://www.linkedin.com/in/pongsupawat/), frontend developer from Chiang Mai, Thailand.

## Credits

Tsūka API was bootstrapped with [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter) - a starter template for TypeScript and Node.

## Licenses

The content of this project itself is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license](http://creativecommons.org/licenses/by-nc-nd/4.0/), and the underlying source code is licensed under the [GNU AGPLv3 license](https://www.gnu.org/licenses/agpl-3.0).

---

\* the minimum required version or higher | \*\* the latest version
