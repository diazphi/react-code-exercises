import React from "react";
export const Checkbox = ({title, name, price, onChange}) => {
    return (
        <div>
            <input type="checkbox" id={name} onChange={onChange} data-price={parseFloat(price.substring(1))} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor={name} className="font-medium text-gray-900 dark:text-gray-300 px-8">{title} - {price}</label>           
        </div>
    )
}