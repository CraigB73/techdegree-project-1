let btn = document.getElementById('btn');
let output = document.getElementById('output')
let quotes = [
  {
    quote: 'Life is Life',
    sorce: 'a',
    citation: 'p1',
    year: 2001,
  },
  {
    quote: 'Love is pain',
    sorce: 'b',
    citation: 'p2',
    year: 2002,
  },
  {
    quote: 'Memories are the only things of value on your death bed.',
    sorce: 'c',
    citation: 'p3',
    year: 2003,
  },

];

/*
// 1st declare variable to Random function
function at() {
  let dQ = Math.floor(Math.random() * quotes.length);
  
  // 2nd declare varable that uses the dQ variable of function at() and access all quotes
  let mQ = quotes[dQ];
  
  // 3rd mQ.quotes/ mQ.sorce access a random quote and sorce of quotes.  
  console.log(mQ.quote + '-' + mQ.sorce);
}*/
// Below is same as above this just prints its to the screen
btn.addEventListener('click', function () {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  let dailyQuote = quotes[randomQuote];

  output.innerHTML = `${dailyQuote.quote}  -  ${dailyQuote.sorce}`;
})

