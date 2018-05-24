/* eslint-env mocha */
const assert = require("assert");
const {it} = require("..");

it("skip me", t => {
  t.skip();
  assert(false);
});

it("timeout", t => {
  t.timeout(5000);
  return new Promise(resolve => {
    setTimeout(resolve, 2500);
  });
});

it("pending test");

it("done callback", (t, done) => {
  t.timeout(5000);
  setTimeout(done, 2500);
});

// this is the original xit.
xit("pending test", t => {
  t.skip();
  assert(false);
});

it.skip("pending test", t => {
  t.skip();
  assert(false);
});

it.only("run me", t => {
  t.skip();
  assert(false);
});
