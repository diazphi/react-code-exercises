import React from 'react';
import './App.css';
import './index.css';
import { SearchList, SimpleCounter, DisplayList, BuildAccordion, Slider, Checklist } from './components';
function App() {
 
  return (
    <div className="md:container md:mx-auto flex justify-start">
      <h1>React Exercises</h1>
      <SearchList />
      <SimpleCounter />
      <DisplayList />
      <BuildAccordion />
      <Slider />
      <Checklist />
    </div>
  )
}

export default App;
