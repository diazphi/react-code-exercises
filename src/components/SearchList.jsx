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
    <div>
        <h2>(1) React Search Filter</h2>
        <input type="text" onChange={onSearchList} />
        <div className="list-of-fruits">
          {listsearch.map((li,index) => {
          return <p key={index}>{li}</p>
          })}
        </div>
    </div>
  )
}
