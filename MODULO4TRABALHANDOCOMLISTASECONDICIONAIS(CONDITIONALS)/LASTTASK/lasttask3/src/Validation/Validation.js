import React from 'react';

const validation = (props) => {
  let answer = {
    message: 'text too short',
  };

  if (props.textLength >= 5) {
    answer = {
      message: 'Text long enough',
    };
  }

  return <div className="validation">{answer.message}</div>;
};

export default validation;
