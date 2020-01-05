import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Input = () => {
  return <input placeholder='Your input here' />;
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = e => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Add input</button>
      {inputList.map((input, index) => {
        return input;
      })}
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById('root'));
