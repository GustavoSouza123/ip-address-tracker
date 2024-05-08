import React from "react";
import "../css/Tracker.css";
import Search from "./Search";
import IpAddressInfo from "./IpAddressInfo";
import Map from "./Map";

function Tracker() {
    return (
        <div className="container">
            <div className="top">
                <h1>IP Address Tracker</h1>
                <Search />
                <IpAddressInfo />
            </div>
            <Map />
        </div>
    );
}

export default Tracker;