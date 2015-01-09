var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var compileEsnext = require('broccoli-esnext');
var findBowerTrees = require('broccoli-bower');
var compileSass = require('broccoli-sass');

var sourceTrees;
var appDir = 'app';

app = pickFiles(appDir, {
  srcDir: '/',
  destDir: '/'
});
app = compileEsnext(app, { includeRuntime: true });
appCss = compileSass([app], '/css/application.scss', '/css/application.css');

reveal = pickFiles('bower_components/reveal.js/', {
  srcDir: '/',
  destDir: '/vendor/reveal/'
});

sourceTrees = [app, appCss, reveal];
module.exports = mergeTrees(sourceTrees);

