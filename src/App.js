import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function Btn({ text, onClick }) {
    return <button onClick={onClick}>{text}</button>;
  }
  const [value, setValue] = useState('Save Changes');
  const changeValue = () => {
    value === 'Save Changes'
      ? setValue('Revert Changes')
      : setValue('Save Changes');
  };
  return (
    <div className="App">
      <Btn text={value} onClick={changeValue} />
      <Btn text="Continue" />
    </div>
  );
}

export default App;
