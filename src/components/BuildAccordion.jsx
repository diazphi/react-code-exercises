import React from "react";
import Accordion from "./Elements/Accordion";
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
        <div>
            <h2>Build Accordion</h2>
            <ul className="accordion">
                {listaccordion.map((li,index) => (
                   <Accordion title={li.title} desc={li.desc} />
                ))}
            </ul>
        </div>
    )
}