import React, { useReducer, useRef } from "react";
export const HookReducer = () => {
    const refInput = useRef();
    const [items,dispatch] = useReducer((state,action) => {
        switch (action.type) {
            case 'add':
                return [
                    ...state, 
                    {
                        id: state.length,
                        name: action.name
                    }
                ]
            case 'remove':
                return state.filter((_,index) => index != action.index)
            default:
                return state;
        }
    },[])
    const onSubmitHandle = event => {
        event.preventDefault();
        dispatch({
            type: 'add',
            name: refInput.current.value
        })
        refInput.current.value = '';
    }
    return (
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className="py-4">Enter any word to add in the list and can be remove each of the item.</h1>
            <form onSubmit={onSubmitHandle}>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" ref={refInput} />
            </form>
            <ul>
            {items.map((item,index) => (
               <li className="my-4" key={item.id}>{item.name}<button className="ml-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-1 border border-blue-500 hover:border-transparent rounded" onClick={() => dispatch({type: 'remove', index})}>X</button></li>     
            ))}
            </ul>
            <p className="pt-10">This app includes React Hooks like useState, useRef, and useReducer. This has also array filter.</p>
        </div>
    )
}