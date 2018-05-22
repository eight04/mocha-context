const _global = global || self;
if (_global.describe) {
  inject(_global);
} else {
  // when the module is required by mocha -r, we have to hook into mocha...
  // FIXME: is there a better way to achieve this?
  const Mocha = require("mocha");
  // https://github.com/mochajs/mocha/blob/0d95e3f41a0859be4e7225541575e78b6d8926ee/lib/mocha.js#L244
  const _loadFiles = Mocha.prototype.loadFiles;
  Mocha.prototype.loadFiles = function() {
    this.suite.once("pre-require", inject);
    _loadFiles.apply(this, arguments);
  };
}

function inject(_global) {
  const mochaContext = require(".");
  for (const key of Object.keys(mochaContext)) {
    _global[key] = mochaContext[key];
  }
}
