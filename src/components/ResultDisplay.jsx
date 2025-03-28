import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';

const ResultsDisplay = () => {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (results.length === 0) return <p className="text-gray-500 text-center">No data to display.</p>;

  return (
    <div className="card-dark">
      <h3 className="text-lg font-bold mb-4">📊 Query Results</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Line Chart */}
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={results}>
              <XAxis dataKey="label" stroke="#e5e7eb" />
              <YAxis stroke="#e5e7eb" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', color: '#e5e7eb' }} />
              <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={results}>
              <XAxis dataKey="label" stroke="#e5e7eb" />
              <YAxis stroke="#e5e7eb" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', color: '#e5e7eb' }} />
              <Bar dataKey="value" fill="#14b8a6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
