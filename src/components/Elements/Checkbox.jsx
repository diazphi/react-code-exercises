import React from "react";
export const Checkbox = ({title, name, price, onChange}) => {
    return (
        <div>
            <input type="checkbox" id={name} onChange={onChange} data-price={parseFloat(price.substring(1))}/>
            <label htmlFor={name}>{title} - {price}</label>           
        </div>
    )
}