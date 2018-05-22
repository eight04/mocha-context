mocha-context
=============

Pass `this` context as the first argument.

Installation
------------

```
npm install -D mocha-context
```

Usage
-----

You can import patched functions from this module:

```js
const {it} = require("mocha-context");

describe("my test", () => {
  it("skip me", t => {
    t.skip();
  });
});
```

Or replace global functions by requiring `mocha-context/register`:

```js
require("mocha-context/register");

describe("my test", () => {
  it("skip me", t => {
    t.skip();
  });
});
```

You can tell mocha to `--require` the library from CLI, so you don't have to `require()` it manually:

```console
$ mocha -r mocha-context/register
```

```js
describe("my test", () => {
  it("skip me", t => {
    t.skip();
  });
});
```

You can also add it to [`mocha.opts`](https://mochajs.org/#mochaopts) which would be picked by CLI:

*test/mocha.opts*
```
-r mocha-context/register
```

```console
$ mocha
```

```js
describe("my test", () => {
  it("skip me", t => {
    t.skip();
  });
});
```

Similar projects
----------------

* [arrow-mocha](https://github.com/skozin/arrow-mocha): Without global register, ES module.

Changelog
---------

* 0.1.0 (May 22, 2018)

  - First release.
