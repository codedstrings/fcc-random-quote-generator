import './App.css'
import { useState } from 'react'


// Sample quotes array (toDo: replace with API later)
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  }
];


function App() {

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text="${currentQuote.text}" - ${currentQuote.author}`;
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{currentQuote.text}</div>
        <div id="author">{currentQuote.author}</div>
        <button id="new-quote" onClick={getRandomQuote}>New Quote</button>
        <a id="tweet-quote" href={tweetUrl} target="_blank">Tweet</a>
      </div>
    </div>
  )
}

export default App
