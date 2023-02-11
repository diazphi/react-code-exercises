import React from "react";
import { Accordion } from "./Elements";
export const BuildAccordion = () => {
    const listaccordion = [
        {
            title: 'Accordion 1',
            desc: 'Accordion Desc 1'
        },
        {
            title: 'Accordion 2',
            desc: 'Accordion Desc 2'
        },
        {
            title: 'Accordion 3',
            desc: 'Accordion Desc 3'
        },
        {
            title: 'Accordion 4',
            desc: 'Accordion Desc 4'
        },
        {
            title: 'Accordion 5',
            desc: 'Accordion Desc 5'
        },        {
            title: 'Accordion 6',
            desc: 'Accordion Desc 6'
        }
    ]
    return(
        <div className="block max-w-mm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2>Build Accordion</h2>
            <ul className="accordion" id="accordion-collapse">
                {listaccordion.map((li,index) => (
                   <Accordion key={index} title={li.title} desc={li.desc} />
                ))}
            </ul>
        </div>
    )
}