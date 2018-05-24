/* eslint-env mocha */
const assert = require("assert");
require("../register");

it("has context", t => {
  assert.equal(typeof t.timeout, "function");
});
