import React from 'react';
import {useState} from "react";

function SearchBar({tasks}) {
    const [query, setQuery] = useState("")

    function simplify(){
      if (query === ''){
       return []
      }
      else{
        const things = tasks.filter(task => task.Area_name.toLowerCase().includes(query.toLowerCase())).sort()
      if(things.length > 20){
        return things.splice(1, 20);
      }
      else{
        return things;
      }
      }
      
      

    }

    return (
        <div>
            <input type="text" maxLength="12" placeholder="Enter County Name" className = "searchbar"
            onChange={event => setQuery(event.target.value)}></input>
            <div className = "box">
            {
               simplify().map((task, index) => {
                    { console.log(task.Area_name)}
                    return(
                    <div key = {index}>
                      <p>County Name: {task.Area_name}</p>
                      <p>Year: {task.Year}</p>
                      <p>Civilian_labor_force: {task.Civilian_labor_force}</p>
                      <p>Unemployment_Rate: {task.Unemployment_Rate}</p>
                    </div>)
            })
            }
            </div>
        </div>
    
    
    
    )
}

export default SearchBar;