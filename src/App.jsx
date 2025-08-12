import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentQuote, setCurrentQuote] = useState({ text: '', author: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [quotesCache, setQuotesCache] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch multiple quotes and cache them
  const fetchQuotesCache = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/quotes'));
      const result = await response.json();
      const data = JSON.parse(result.contents);
      
      console.log('Fetched quotes cache:', data.length, 'quotes');
      
      // Store quotes in cache
      setQuotesCache(data);
      
      // Set first quote
      if (data.length > 0) {
        setCurrentQuote({
          text: data[0].q,
          author: data[0].a
        });
        setCurrentIndex(0);
      }
    } catch (error) {
      console.error('Error fetching quotes cache:', error);
      // Fallback quotes if API fails
      const fallbackQuotes = [
        { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
        { q: "Life is what happens to you while you're busy making other plans.", a: "John Lennon" },
        { q: "The future belongs to those who believe in the beauty of their dreams.", a: "Eleanor Roosevelt" },
        { q: "It is during our darkest moments that we must focus to see the light.", a: "Aristotle" },
        { q: "The only impossible journey is the one you never begin.", a: "Tony Robbins" }
      ];
      setQuotesCache(fallbackQuotes);
      setCurrentQuote({
        text: fallbackQuotes[0].q,
        author: fallbackQuotes[0].a
      });
      setCurrentIndex(0);
    } finally {
      setIsLoading(false);
    }
  };

  // Get next quote from cache
  const getNextQuote = () => {
    if (quotesCache.length === 0) return;
    
    // Get random index instead of sequential
    const randomIndex = Math.floor(Math.random() * quotesCache.length);
    const quote = quotesCache[randomIndex];
    
    setCurrentQuote({
      text: quote.q,
      author: quote.a
    });
    setCurrentIndex(randomIndex);
  };

  // Load quotes cache on component mount
  useEffect(() => {
    fetchQuotesCache();
  }, []);


  // Twitter URL with current quote
  const tweetUrl = `https://twitter.com/intent/tweet?text="${currentQuote.text}" - ${currentQuote.author}`;

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          {isLoading ? 'Loading...' : `"${currentQuote.text}"`}
        </div>
        <div id="author">
          {isLoading ? '' : `- ${currentQuote.author}`}
        </div>
        <button id="new-quote" onClick={getNextQuote} disabled={isLoading || quotesCache.length === 0}>
          {isLoading ? 'Loading...' : 'New Quote'}
        </button>
        <a id="tweet-quote" href={tweetUrl} target="_blank" rel="noopener noreferrer">
          Tweet Quote
        </a>
      </div>
      {/* Debug info - remove later */}
      <div style={{position: 'fixed', bottom: '10px', right: '10px', fontSize: '12px', color: 'white'}}>
        Cache: {quotesCache.length} quotes | Current: {currentIndex + 1}
      </div>
    </div>
  )
}

export default App