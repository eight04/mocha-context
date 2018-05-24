const _global = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : window;
module.exports = _global;
