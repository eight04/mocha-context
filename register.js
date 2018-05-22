const mochaContext = require(".");
const _global = global || self;
for (const key of Object.keys(mochaContext)) {
  _global[key] = mochaContext[key];
}
