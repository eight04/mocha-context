/* eslint-env mocha */
const assert = require("assert");
require("../register");

it("has context", t => {
  assert(typeof t.timeout, "function");
});
