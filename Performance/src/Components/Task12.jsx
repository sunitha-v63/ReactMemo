import React, { useState, useMemo } from 'react';

const data = ['Indianapolis',
  'Charlotte', 'Seattle', 'Denver', 'Washington', 'Boston'
];

function Task12() {
  const [query, setQuery] = useState('');

  const filteredSuggestions = useMemo(() => {
    return data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
        <h6>Project1,2</h6>
        <h3>filter</h3>
      <h3>Search Suggestions App</h3>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city"
      />
      <ul>
        {filteredSuggestions.length > 0 ? (
          filteredSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))
        ) : (
          <li>No suggestions found</li>
        )}
      </ul>
    </div>
  );
}

export default Task12;
