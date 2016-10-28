# Buzzler-ui

Experimental frontend for bizflow-graphql web api.

## Starter kit

This project used [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) as starting project template. Check it out for information about the used front-end technologies.

## Installation

First, clone the project:

```bash
$ git clone https://github.com/sljuka/buzzler-ui
$ cd buzler-ui
```

Then install dependencies and check to see it works

```bash
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

If everything works, on localhost:3000 you should see the app's homepage.

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
