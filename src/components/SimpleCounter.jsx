import React, { useState } from "react";

export const SimpleCounter = () => {
    const [counter,setcounter] = useState(0);
    const onPlus = () => {
        setcounter(cc => {
           return cc + 1;
        })
    }
    const onMinus = () => {
        setcounter(cc => {
           return cc - 1;
        })
    }
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2>(2) Simple Counter Exercises</h2>
            <p className="py-8">{counter}</p>
            <button type="button" onClick={onPlus} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">+</button>
            <button type="button" onClick={onMinus} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">-</button>
        </div>
    )
}