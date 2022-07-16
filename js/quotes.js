const quotes = [
{
    quote:"I believe that developers has been changed our world better and happier making an wonderful codings.",
    author: "Jin",
},
{
    quote:"History was written by the victor",
    author: "Call of Duty",
},
{
    quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchil",
},
{
    quote:"It is better to fail in originality than to succedd in imitation.",
    author: "Herman Melville",
},
{
    quote:"Success usually comes to those who are too busy looking for it.",
    author: "Henry David Thoreau",
},
{
    quote:"Develop success from failures. Discouragement and failure are two of the surset stepping stones to success. ",
    author: "Dale Carnegie",
},
{
    quote:"The pessimist sees difficulty in every opportunity. the optimist sees opportunity in every difficulty.",
    author: "Winston Churchill"
},
{
    quote:"Don'let yesterday take up too much of today.",
    author:"Will Rogers",
},
{
    quote:"You learn more from failure than from success. Don't let it stop you. Failure bulids character.",
    author:"Unknown",
},
{
    quote:"Experience is a hard teacher because she gives the test first, the lesson afterwards.",
    autho:"Vernon Sandors Law",
},
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;