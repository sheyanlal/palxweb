import React from 'react';
import {useState} from "react";

function SearchBar() {
    const [query, setQuery] = useState("")
    return (
        <div className="box" >
            <input type="text" maxLength="12" placeholder="FIPS Code" className="searchbar"
            onChange={event => setQuery(event.target.value)}></input>
            {/* {
                Data.map((post, index) => {
                    <div key={index}>
                    <p>{post.title}</p>
                    <p>{post.author}</p>
                    </div>
            })
            } */}
        </div>
    )
}

export default SearchBar;