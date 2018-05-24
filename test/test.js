/* eslint-env mocha */
const assert = require("assert");
const sinon = require("sinon");
const {it, before} = require("..");

describe("patched before", () => {
  const BEFORES = [
    [t => {
      assert.equal(typeof t.timeout, "function");
    }],
    ["with message", t => {
      assert.equal(typeof t.timeout, "function");
    }],
    ["timeout", t => {
      t.timeout(5000);
      return new Promise(resolve => {
        setTimeout(resolve, 2500);
      });
    }],
    ["timeout done", (t, done) => {
      t.timeout(5000);
      setTimeout(done, 2500);
    }]
  ];
  
  for (const _before of BEFORES) {
    _before[_before.length - 1] = sinon.spy(_before[_before.length - 1]);
    before(..._before);
  }
  
  it("make sure hooks are executed", () => {
    for (const _before of BEFORES) {
      assert(_before[_before.length - 1].calledOnce);
    }
  });
});

describe("patched it", () => {
  it("make sure skip works", t => {
    t.skip();
    assert(false);
  });

  it("make sure timeout works", t => {
    t.timeout(5000);
    return new Promise(resolve => {
      setTimeout(resolve, 2500);
    });
  });

  it("make sure done callback works", (t, done) => {
    t.timeout(5000);
    setTimeout(done, 2500);
  });

  it("make sure pending doesn't throw");

  // this is the original xit.
  xit("make sure xit works", () => {
    assert(false);
  });

  it.skip("make sure it.skip works", () => {
    assert(false);
  });
});
