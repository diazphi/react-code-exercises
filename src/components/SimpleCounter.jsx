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
            <p>{counter}</p>
            <button type="button" onClick={onPlus}>+</button>
            <button type="button" onClick={onMinus}>-</button>
        </div>
    )
}