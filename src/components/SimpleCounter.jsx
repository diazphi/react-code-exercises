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
        <div>
            <h2>(2) Simple Counter Exercises</h2>
            <p>{counter}</p>
            <button type="button" onClick={onPlus}>+</button>
            <button type="button" onClick={onMinus}>-</button>
        </div>
    )
}