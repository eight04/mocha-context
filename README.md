mocha-context
=============

[![Build Status](https://travis-ci.org/eight04/mocha-context.svg?branch=master)](https://travis-ci.org/eight04/mocha-context)
[![Coverage Status](https://coveralls.io/repos/github/eight04/mocha-context/badge.svg?branch=master)](https://coveralls.io/github/eight04/mocha-context?branch=master)
[![install size](https://packagephobia.now.sh/badge?p=mocha-context)](https://packagephobia.now.sh/result?p=mocha-context)

Pass `this` context as the first argument of the arrow function.

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

* 0.1.4 (May 24, 2018)

  - Fix: reference error when `global` doesn't exist.

* 0.1.3 (May 24, 2018)

  - Fix: support `xxx.only`, `xxx.skip`.
  - Fix: hooks (`before`, `beforeEach`, etc) have different signature.

* 0.1.2 (May 23, 2018)

  - Fix: register hook doesn't work with multiple test files.

* 0.1.1 (May 23, 2018)

  - Fix: register hook.

* 0.1.0 (May 22, 2018)

  - First release.
