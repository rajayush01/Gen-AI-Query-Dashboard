import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../redux/querySlice';

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);
  const dispatch = useDispatch();

  return (
    <div className="card-dark max-h-72 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">📚 Query History</h3>
        {history.length > 0 && (
          <button
            onClick={() => dispatch(clearHistory())}
            className="text-red-500 hover:underline transition"
          >
            Clear History
          </button>
        )}
      </div>
      {history.length === 0 ? (
        <p className="text-gray-500">No query history yet.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li
              key={index}
              className="border-l-4 border-accent px-4 py-2 hover:bg-hoverDark transition-all cursor-pointer"
            >
              {item.query} -{' '}
              <span className="text-gray-500">{item.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;
