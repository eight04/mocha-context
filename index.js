const METHODS = [
  "after", "afterEach", "before", "beforeEach",
  "describe", "it", "context", "specify"
];
const _global = global || self;

for (const name of METHODS) {
  exports[name] = decorate(_global[name]);
}

function contextify(fn) {
  if (fn.length >= 2) {
    return function(done) {
      return fn(this, done);
    };
  }
  return function() {
    return fn(this);
  };
}

function patchFunction(func) {
  return (...args) => {
    args = args.map(a => typeof a === "function" ? contextify(a) : a);
    return func(...args);
  };
}

function decorate(func) {
  const patchedFunc = patchFunction(func);
  if (func.skip) {
    // no need to patch .skip
    patchedFunc.skip = func.skip;
  }
  if (func.only) {
    patchedFunc.only = patchFunction(func.only);
  }
  // not sure if this is required but arrow-mocha includes it.
  patchedFunc.toString = () => func.toString();
  return patchedFunc;
}
