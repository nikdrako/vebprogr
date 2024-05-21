import React, { useState } from 'react';
import routes from './routesData';
import './RoutesPage.css';

const RoutesPage = () => {
  const [search, setSearch] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState(routes);

  const handleSearch = () => {
    setFilteredRoutes(routes.filter(route => route.name.toLowerCase().includes(search.toLowerCase())));
  };

  return (
    <div className="routes-page">
      <h2 className="page-title">Search Routes</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter route"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredRoutes.map(route => (
          <li key={route.id}>
            <h3>{route.name}</h3>
            <p>{route.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoutesPage;
