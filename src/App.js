import React from 'react';
import './App.css';
import Search from './components/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }


  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
