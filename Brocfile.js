var pickFiles = require('broccoli-static-compiler');
var compileEsnext = require('broccoli-esnext');

var app = 'app';
app = pickFiles(app, {
  srcDir: '/',
  destDir: '/' // move under dist namespace
});
app = compileEsnext(app);

module.exports = app;
