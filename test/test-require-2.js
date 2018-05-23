/* eslint-env mocha */
const assert = require("assert");

it("skip me", t => {
  t.skip();
  assert(false);
});
