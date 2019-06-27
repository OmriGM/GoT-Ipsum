import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import Search from './containers/Search'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Search></Search>
    </div>
  );
}

export default App;
