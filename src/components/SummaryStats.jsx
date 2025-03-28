import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const summaryData = [
  { label: 'New Users', value: 1200 },
  { label: 'Revenue', value: 8500 },
  { label: 'Conversions', value: 75 },
];

const SummaryStats = () => {
  return (
    <div className="card-dark">
      <h3 className="text-lg font-bold mb-4">📊 Summary Statistics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className="bg-hoverDark p-4 rounded-lg text-center shadow-neon transition-all hover:scale-105"
          >
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={summaryData}>
            <XAxis dataKey="label" stroke="#e5e7eb" />
            <YAxis stroke="#e5e7eb" />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', color: '#e5e7eb' }} />
            <Bar dataKey="value" fill="#14b8a6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SummaryStats;
