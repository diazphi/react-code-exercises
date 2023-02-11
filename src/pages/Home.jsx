import React from 'react';
import { SearchList, SimpleCounter, DisplayList, BuildAccordion, Slider, Checklist, SimpleLogin, PrintDataAPI } from '../components';
export const Home = () => {
    return (
        <div className="md:container md:mx-auto">
            <h1>React Exercises</h1>
            <SearchList />
            <SimpleCounter />
            <DisplayList />
            <BuildAccordion />
            <Slider />
            <Checklist />
            <SimpleLogin />
            <PrintDataAPI />
      </div>
    )
}