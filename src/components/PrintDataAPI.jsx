import React, { useEffect, useState } from "react";
import { DataApi } from "./Elements";
export const PrintDataAPI = () => {
    const [printData, setprintData] = useState([]);
    const onGetDataAPI = async () => {
        let response = await fetch('https://official-joke-api.appspot.com/random_joke');
        let data = await response.json();
        setprintData(cData => [
            ...cData, data
        ])
        console.log(printData);
    }
    useEffect(() => {
        onGetDataAPI();
    },[])
    return (
        <div className="print-api block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1>Print Data from Rest API</h1>
            <input type="button" value="Get Data from API" onClick={onGetDataAPI} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
            <div className="table-data">
                {printData.map(data => (
                   <DataApi key={data.id} id={data.id} punchline={data.punchline} setup={data.setup} type={data.type} />
                ))}
            </div>
        </div>
    )
}