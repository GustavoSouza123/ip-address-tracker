import React from "react";
import "../css/Search.css";
import arrow from "../assets/icon-arrow.svg";

function Search({ onSubmit }) {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="ip" placeholder="Search for any IP address or domain" className="input" />
            <button type="submit" className="submit">
                <img src={arrow} alt="arrow icon" />
            </button>
        </form>
    );
}

export default Search;