import React from "react";
export const DataApi = ({id,punchline,setup,type}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>Punchline {punchline}</div>
            <div>Setup {setup}</div>
            <div>Type {type}</div>
        </div>
    )
}