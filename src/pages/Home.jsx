import React, { useContext } from 'react';
import { SearchList, SimpleCounter, DisplayList, BuildAccordion, Slider, Checklist, SimpleLogin, PrintDataAPI } from '../components';
import { userContext } from '../components/userContext';
export const Home = () => {
    const [value, setValue] = useContext(userContext);
    return (
        <div className="md:container md:mx-auto">
            <h1 className="py-8">React Exercises: {value}</h1>
            <button className="inline-flex items-center px-5 py-2.5 mb-10 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setValue('Hello from Home')}>Send Hello from Home</button>
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