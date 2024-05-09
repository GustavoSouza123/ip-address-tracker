import React from "react";
import "../css/Search.css"


function Search() {
    function handleSubmit(event) {
        const ip = document.querySelector('.input').value;
        console.log('ip:', ip);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="ip" placeholder="Search for any IP address or domain" className="input" />
            <button type="submit" className="submit">
                <img src="./src/assets/icon-arrow.svg" alt="arrow icon" />
            </button>
        </form>
    );
}

export default Search;