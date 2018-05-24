/* eslint-env mocha */
const assert = require("assert");
const {it} = require("..");

describe("patched it with only", () => {
  it("don't run", () => {
    assert(false);
  });

  it.only("run me", t => {
    assert.equal(typeof t.timeout, "function");
  });
});
