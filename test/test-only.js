const assert = require("assert");
const {it} = require("..");

it.only("run me", t => {
  t.skip(5000);
  assert(false);
});

it("don't run", () => {
  assert(false);
});
