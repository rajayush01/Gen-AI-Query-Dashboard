import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitQuery, querySuccess, queryError } from '../redux/querySlice';
import mockData, { mockSuggestions } from '../mockData';

const QueryInput = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!query.trim()) return;
    dispatch(submitQuery(query));

    setTimeout(() => {
      const result = mockData[query] || null;
      if (result) {
        dispatch(querySuccess(result));
      } else {
        dispatch(queryError('No results found for your query.'));
      }
    }, 1000);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 1) {
      const filteredSuggestions = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="card-dark relative">
      <input
        type="text"
        placeholder="🔍 Ask a business question..."
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-darkBg text-darkText border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-darkCard border border-gray-700 rounded-lg shadow-lg mt-2 z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-hoverDark transition"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleSubmit}
        className="btn-glow w-full mt-4"
      >
        Submit Query
      </button>
    </div>
  );
};

export default QueryInput;
