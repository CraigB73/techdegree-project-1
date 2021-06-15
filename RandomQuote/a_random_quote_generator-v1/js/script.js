/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* Quote array of objects: quote, source; if available, citation and year*/
let quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing',
    source: 'Walt Disney',
    citation: 'unknown',
    year: 'unknown',
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    source: 'Will Rogers',
    citation: 'BrainTracy.com',
    year: 'unknown',
  },
  {
    quote: 'Simplicity is the ultimate sophistication',
    source: 'Leonardo da Vinci',
    citation: 'Quote Investigor.com',
    year: 2015,
  }

];

/***
 * Random quote function 
 * assigns random number 0 - 2 to the quotes array index
 * placed in a new variable 
 * return new array to function
 ***/
function randomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let quotesArray = quotes[randomNumber];
  // console.log(quotesArray);
  return quotesArray;

}


/***
 *  PrintQuote function to display quote with each click of button
 * assigned two vaiable: 1. that holds randomQuote function, 2. variable(html)that will hold what will be printed to the screen
 * added conditions to check if there is a citation and year assigned to the quotes array.
 * insert string to so it can be printed to the page.  
 * return the html variable to the funcition to be used in the .addEventListener()
 */
function printQuote() {
  let getRandomQuote = randomQuote();
  let html = `
  <p class= "quote">${getRandomQuote.quote}</p>
  <p class= "source">${getRandomQuote.source}`;

  if (getRandomQuote.citation !== 'unknown') {
    html += `<span class= "citation">${getRandomQuote.citation}</span>`

  };
  if (getRandomQuote.year !== 'unknown') {
    html += `<span class= "year">${getRandomQuote.year}</span></p>`;

  };
  document.getElementById('quote-box').innerHTML = html;
  return (html)
}


document.getElementById('load-quote').addEventListener("click", printQuote, false);