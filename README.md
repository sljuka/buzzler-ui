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

## Buzzler-ui features:

- [ ] authentification
- [x] show processes in a grid
- [x] search and fetch process names and display them so user can select them
- [x] open/close selected process
- [ ] create process instance
- [ ] run instance
- [ ] start/finish instance action
- [ ] display informative instance data
- [ ] drag and drop process ordering
- [ ] graphical display of instance status (finished/remaining actions)

## Test guidelines

### Integration (acceptance) test guidelines

Suggestions for writing cypress tests with mocha:

`describe` is the test subject and should be a noun. Good examples are:

```
describe('Credit check')
describe('Additional amount')
describe('Registration')
describe('Changing email')
describe('Blacklisted client')
```

These names do not hold additional context information. Example of a bad subject description would be

```
describe('When homepage gets rendered')
describe('When authorization token is expired')
describe('To make a payment')
```

First two include context information in the subject and the third one is not a noun.

```
describe('Loan additional amount (borrow more) feature', () => {
  it('should not display the borrow more section when user does not have additional amount', () => {
```

Sometimes it's nicer to have a smaller subject names, and use the `context` and `it` to describe the test in more details. Imo better way to write the previous test would be:

```
describe('Additional amount page', () => {
  context('when user does not have additional amount', () => {
    it('should not display the borrow more section', () => {...})
  })
})
```

If you have a `when` in your test scenario, use a `context`.

```
describe('When authorization token is expired')
```

to

```
describe('Authorization token', () => {
  context('when authorization token is expired', () => {...})
})
```

In the `it` section it should read nicely:

```
it('should not display the borrow more section', () => {...})
```

some like the use of `should` and others don't. IMO this would be nicer written like this:

```
it('does not display the borrow more section`)
```

`it` references the test subject, so

```
describe('Additional amount page', () => {
  context('when user does not have additional amount', () => {
    it('does not display the borrow more section', () => {...})
  })
})
```

the `it` part reads as `Additional amount page does not display the borrow more section`.

`it` should not reference other stuff (especially the user since he is not `it` :D) or nothing at all:
```
it('User writes 4 characters to input', () => {...})
it('is not able to sign in', () => {...})
it('there should be four payment methods', () => {...})
```

Since we are writing acceptance tests, that (theoretically) should be readable by business people, we would not want them to fall asleep reading it.

```
it('name should be shown', () => {
  cy
  .contains('Your name').next().should('contain', 'String fullName');
});

it('current e-mail should be shown', () => {
  cy
  .contains('Your email').next().should('contain', 'email@example.com');
});

it('current mobile phone should be shown', () => {
  cy
  .contains('Phone number').next().should('contain', '123456789');
});

it('marketing checkbox should work', () => {
  cy
  .get('input[type="checkbox"]').parent().click()
  .get('input[type="checkbox"]').should('be.checked');
});
```

could be replaced with:

```
it('allows the user to enter his information', () => {
  cy
  .contains('Your name').next().should('contain', 'String fullName')
  .contains('Your email').next().should('contain', 'email@example.com')
  .contains('Phone number').next().should('contain', '123456789')
  .get('input[type="checkbox"]').parent().click()
  .get('input[type="checkbox"]').should('be.checked');
})
```

Also if business people would be reading it there should be less techno babel and more domain babel. Also keeping the details of implementation out of the tests.

```
when('User clicks the "APPLY" button', () => {...})
```

to

```
when('User applies for a loan', () => {...})
```
