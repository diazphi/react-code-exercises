import React from "react";

export const DisplayList = () => {
    const articlelist = [
        {
            title: 'Article List 1',
            desc: 'Article List Description 1',
            author: 'John Smith'
        },
        {
            title: 'Article List 2',
            desc: 'Article List Description 2',
            author: 'John Smith'
        },
        {
            title: 'Article List 3',
            desc: 'Article List Description 3',
            author: 'John Smith'
        },
        {
            title: 'Article List 4',
            desc: 'Article List Description 4',
            author: 'John Smith'
        }
    ]
    return (
        <div>
            <h2>Display a list</h2>
            {articlelist.map((art,index) => (
                <div key={index}>
                    <h4 key={'h--'+index}>{art.title}</h4>     
                    <p key={'p--'+index}>{art.desc}</p>
                    <em key={'em--'+index}>{art.author}</em>
                </div>           
            ))}
        </div>
    )
}

