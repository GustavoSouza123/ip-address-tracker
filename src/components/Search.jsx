import React from "react";
import "../css/Search.css"

function Search() {
    return (
        <form action="">
            <input type="text" placeholder="Search for any IP address or domain" className="input" />
            <button className="submit">
                <img src="./src/assets/icon-arrow.svg" alt="arrow icon" />
            </button>
        </form>
    );
}

export default Search;