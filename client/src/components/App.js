import React from 'react';
import TodoList from './TodoList';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <TodoList />
    </div>
  );
}

export default App;
