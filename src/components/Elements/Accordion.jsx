import React, { useState } from "react";
export const Accordion = ({title,desc}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="accordion-item">
           <div className="accordion-title flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsActive(!isActive)}>
                <div className="p-5 font-light border-b-0 border-gray-200 dark:border-gray-700">{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content p-5 px-10 py-10 font-light border border-b-0 border-gray-200 dark:border-gray-700 bg-gray-500">{desc}</div>}
        </div>
    )
}
