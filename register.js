const _global = require("./lib/global");

function inject(_global) {
  const mochaContext = require(".");
  for (const key of Object.keys(mochaContext)) {
    _global[key] = mochaContext[key];
  }
}

function install() {
  // hook into mocha...
  // FIXME: is there a better way to achieve this?
  const Mocha = require("mocha");
  // https://github.com/mochajs/mocha/blob/0d95e3f41a0859be4e7225541575e78b6d8926ee/lib/mocha.js#L244
  const _loadFiles = Mocha.prototype.loadFiles;
  Mocha.prototype.loadFiles = function() {
    // each time mocha loads a file it overwrites the global again
    this.suite.on("pre-require", inject);
    _loadFiles.apply(this, arguments);
  };
  // once we hook into mocha, we don't have to do anything else.
  Object.defineProperty(module, "exports", {
    value: {}
  });
}

Object.defineProperty(module, "exports", {
  get() { // eslint-disable-line getter-return
    if (_global.describe) {
      inject(_global);
    } else {
      install();
    }
  }
});
