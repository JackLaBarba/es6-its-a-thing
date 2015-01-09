console.log([1, 2, 4].map(x => x * x));

Reveal.initialize({
  history: true,
  dependencies: [
    {
      src: '/vendor/reveal/plugin/highlight/highlight.js', async: true, callback: function() {hljs.initHighlightingOnLoad();}
    },
  ]
});
