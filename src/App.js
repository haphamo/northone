import React from 'react';
import { CreateButton } from './components/create.css'
import NewTaskForm from './components/newtaskform'
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
      <header style={headerStyling}>NorthOne To Do List</header>
      <CreateButton>New Task</CreateButton>
      <NewTaskForm />
    </div>
  );
}

export default App;
