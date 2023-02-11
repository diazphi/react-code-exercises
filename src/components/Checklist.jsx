import React, { useState } from "react";
import { Checkbox } from "./Elements";
export const Checklist = () => {
    const [Total,setTotal] = useState(0);
    const itemlist = [
        {
            id: 1,
            title: 'Capsicum',
            name: 'capsicum',
            price: 20

        },
        {
            id: 2,
            title: 'Paneer',
            name: 'paneer',
            price: 11
        },
        {
            id: 3,
            title: 'Red Paprika',
            name: 'redpaprika',
            price: 10
        },
        {
            id: 4,
            title: 'Onions',
            name: 'onions',
            price: 40
        },
        {
            id: 5,
            title: 'Extra Cheese',
            name: 'extracheese',
            price: 34
        },
        {
            id: 6,
            title: 'Baby Corns',
            name: 'babycorns',
            price: 18
        },
        {
            id: 7,
            title: 'Mushroom',
            name: 'mushroom',
            price: 23
        }
    ]
    const onChangePrice = event => {
        setTotal(ctotal => {
            if(event.target.checked) {
                return ctotal += parseFloat(event.target.getAttribute('data-price'));
            } else {
                return ctotal -= parseFloat(event.target.getAttribute('data-price'));
            }
           
        })
    }
    const formatCurrency = (price) => {
        return price = `$${parseFloat(price).toFixed(2)}`;
    }
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1>Checklist</h1>
            {itemlist.map(item => (
                <Checkbox key={item.id} title={item.title} name={item.name} price={formatCurrency(item.price)} onChange={onChangePrice} />
            ))}
            <h2>Total Price: {formatCurrency(Total)}</h2>
        </div>
    )
}