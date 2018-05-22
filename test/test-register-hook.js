/* eslint-env mocha */
const assert = require("assert");

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
