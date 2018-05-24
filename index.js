const METHODS = [
  {
    names: ["after", "afterEach", "before", "beforeEach"],
    decorate: decorateHook
  },
  {
    names: ["describe", "it"],
    decorate: decorateTest
  }
];
const _global = global || self;

for (const {names, decorate} of METHODS) {
  for (const name of names) {
    exports[name] = decorate(_global[name]);
  }
}

function contextify(fn, hasDone) {
  if (hasDone) {
    return function(done) {
      return fn(this, done);
    };
  }
  return function() {
    return fn(this);
  };
}

function patchTest(func) {
  return (message, runner) => {
    // pending test
    if (!runner) {
      return func(message);
    }
    // done
    if (runner.length >= 2) {
      return func(message, contextify(runner, true));
    }
    // normal
    return func(message, contextify(runner));
  };
}

function patchHook(func) {
  return runner => {
    if (runner.length >= 2) {
      return func(contextify(runner, true));
    }
    return func(contextify(runner));
  };
}

function decorateHook(func) {
  return patchHook(func);
}

function decorateTest(func) {
  const patchedFunc = patchTest(func);
  // no need to patch .skip
  patchedFunc.skip = func.skip;
  patchedFunc.only = patchTest(func.only);
  return patchedFunc;
}
