import React from 'react';

const ErrorState = ({ message }) => (
  <div className="text-red-500 text-center my-4">
    ❗️ {message}
  </div>
);

export default ErrorState;
