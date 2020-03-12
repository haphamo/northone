import React from 'react';
import Body from './components/body'
import './App.css';

const headerStyling = {
  display: 'flex',
  height: '8rem',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3em',
  backgroundColor: '#c28285'
}


function App() {
  return (
    <div>
      <header style={headerStyling}>To Do List</header>
      <Body />
    </div>
  );
}

export default App;
