import React, { useState } from 'react';
// starts with use 
// component name must be uppercase
// invoke inside function/component boby
// don't call hooks conditionally

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('hello world'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <div className="example">
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </div>
  );
};

export default UseStateBasics;