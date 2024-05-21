import React, { useState } from 'react';
import routes from './routesData';
import './Home.css';

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = routes.filter(route =>
      route.from.toLowerCase().includes(from.toLowerCase()) &&
      route.to.toLowerCase().includes(to.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="home">
      <h1 className="welcome-text">Welcome to Bus Ticket App</h1>
      <p className="subtitle-text">Book your bus tickets easily and conveniently.</p>
      <div className="search-container">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          placeholder="Passengers"
          min="1"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map(route => (
              <li key={route.id}>
                <h3>{route.name}</h3>
                <p>{route.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
