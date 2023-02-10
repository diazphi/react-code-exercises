import React from 'react';
import './App.css';
import { SearchList, SimpleCounter, DisplayList, BuildAccordion, Slider } from './components';
function App() {
 
  return (
    <div className="App">
      <h1>React Exercises</h1>
      <SearchList />
      <SimpleCounter />
      <DisplayList />
      <BuildAccordion />
      <Slider />
    </div>
  )
}

export default App;
