/* eslint-env mocha */
const assert = require("assert");
require("../register");

it("skip me", t => {
  t.skip();
  assert(false);
});
