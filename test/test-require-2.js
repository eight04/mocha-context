/* eslint-env mocha */
const assert = require("assert");

it("has context", t => {
  assert.equal(typeof t.timeout, "function");
});
