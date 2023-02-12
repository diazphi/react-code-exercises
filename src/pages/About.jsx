import React, { useContext } from "react";
import { LoginDetails } from "../components/LoginDetails";
import { userContext } from "../components/userContext";
export const About = () => {
    const [value,setValue] = useContext(userContext);
    const onLoginDetails = async () => {
        const login = await LoginDetails();
        setValue(login);
    }
    return (
        <div className="md:container md:mx-auto">
            <h1>About Us: {JSON.stringify(value,null,2)}</h1>
            <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10" onClick={() => setValue('Hello from About')}>Send Hello from About</button>
            <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10" onClick={onLoginDetails}>Display Login Details</button>
        </div>
    )
}