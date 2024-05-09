import React from "react";
import "../css/Tracker.css";
import Search from "./Search";
import IpAddressInfo from "./IpAddressInfo";
import Map from "./Map";

function Tracker() {
    async function handleSubmit() {
        const ip = document.querySelector('.input').value;
        const apiKey = 'at_eOp5vIu8GZbLd41oyvdi2FCnHmK3K';

        try {
            const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ip}`);
            if(!response.ok) {
                throw new Error('there was an error processing you request');
            }
            const data = await response.json();
        } catch(err) {
            console.error('there was an error processing you request', err)
        }
    }

    return (
        <div className="container">
            <div className="top">
                <h1>IP Address Tracker</h1>
                <Search onSubmit={handleSubmit} />
                <IpAddressInfo info={data} />
            </div>
            <Map />
        </div>
    );
}

export default Tracker;