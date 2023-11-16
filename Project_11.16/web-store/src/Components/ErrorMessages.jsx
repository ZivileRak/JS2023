import React from 'react';

const ErrorMessages = ({ messages }) => {
  return (
    <div className="error-messages">
      {messages.map((message, index) => (
        <p key={index} className="error-message">
          {message}
        </p>
      ))}
    </div>
  );
};

export default ErrorMessages;
