const methods = ["after", "afterEach", "before", "beforeEach", "context", "describe", "it"];
const _global = global || self;

for (const method of methods) {
  exports[method] = decorate(_global[method]);
}

function decorate(func) {
  return (message, runner) => {
    // pending test
    if (!runner) {
      return func(message);
    }
    // done
    if (runner.length >= 2) {
      return func(message, function(done) {
        return runner(this, done);
      });
    }
    // normal
    return func(message, function() {
      return runner(this);
    });
  };
}
