import React, { useContext } from "react";
import { userContext } from "../components/userContext";
export const Contact = () => {
    const [value,setValue] = useContext(userContext);
    return (
        <div className="md:container md:mx-auto">
        <h1>Contact Us {value}</h1>
        <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10" onClick={() => setValue('Hello from Contact')}>Send Message from Contact</button>
        </div>
    )
}