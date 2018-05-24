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

it("no runner");

it("done callback", (t, done) => {
  t.timeout(5000);
  setTimeout(done, 2500);
});

// this is the original xit.
xit("xit", t => {
  t.timeout(0);
  assert(false);
});

it.skip("it.skip", t => {
  t.timeout(0);
  assert(false);
});
