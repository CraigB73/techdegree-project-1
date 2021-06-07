/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

let quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing',
    sorce: 'Walt Disney',
    citation: 'BrainTracy.com',
    year: 2001,
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    sorce: 'Will Rogers',
    citation: 'BrainTracy.com',
    year: 2002,
  },
  {
    quote: 'Simplicity is teh ultimate sophistication',
    sorce: 'Leonardo da Vinci',
    citation: 'p3',
    year: 2003,
  },

];
// Random quote function

function randomQuote() {
  let oneQuote = Math.floor(Math.random() * quotes.length);
  let quoteChoice = quotes[oneQuote];
 
  let quoteMessage = `<h1><q>quoteChoice.quote</q></h1> + '-' + quoteChoice.sorce`;
}



document.getElementById('load-quote').addEventListener("click", printQuote, false);