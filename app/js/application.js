console.log([1, 2, 4].map(x => x * x));

function* plusOneFactory() {
  var i = 0;
  while (true) {
    yield i;
    i++;
  }
}
var plusOner = plusOneFactory();

var myList = [1, 2, 3];
for (var num of myList) {
  console.log(num)
}

for (var num of plusOner) {
  if (num > 10) {
    break;
  }
  console.log('plusOner: ', num);
}

var weirdString = `In JavaScript '\n' is a line-feed`;
console.log(weirdString);


var weirdString = `In JavaScript this is
not legal.`;
console.log(weirdString);

//Actual app code . . .

Reveal.initialize({
  history: true,
  dependencies: [
    {
      src: '/vendor/reveal/plugin/highlight/highlight.js', async: true, callback: function() {hljs.initHighlightingOnLoad();}
    },
  ]
});
