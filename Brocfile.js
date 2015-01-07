var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var compileEsnext = require('broccoli-esnext');
var findBowerTrees = require('broccoli-bower');

var sourceTrees;
var appDir = 'app';

app = pickFiles(appDir, {
  srcDir: '/',
  destDir: '/' // move under dist namespace
});

app = compileEsnext(app);

reveal = pickFiles('bower_components/reveal.js/', {
  srcDir: '/',
  destDir: '/vendor/reveal/'
});

sourceTrees = [app, reveal];

var appAndDependencies = mergeTrees(sourceTrees);

module.exports = appAndDependencies;

