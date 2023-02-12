import React, { useState } from 'react';

export const SearchList = () => {
  const list = [
    'Banana',
    'Grapes',
    'Peanuts',
    'Mango',
    'Orrange',
    'Pineapple',
    'Apple'
  ]
  var searchresult = [];
  const [listsearch, setlistsearch] = useState(searchresult);
  const onSearchList = event => {
  if (event.target.value === "") {
    setlistsearch(searchresult);
    return;
  }
  searchresult = list.filter((item) => 
     item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
  )
  setlistsearch(searchresult);
}

  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2>(1) React Search Filter</h2>
        <input type="text" onChange={onSearchList} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <div className="list-of-fruits">
          {listsearch.map((li,index) => {
          return <p key={index}>{li}</p>
          })}
        </div>
    </div>
  )
}
