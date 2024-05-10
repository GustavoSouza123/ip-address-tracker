import React from "react";
import { useState, useEffect } from "react";
import "../css/Tracker.css";
import Search from "./Search";
import IpAddressInfo from "./IpAddressInfo";
import Map from "./Map";

function Tracker() {
    const [data, setData] = useState('');
    const [myIpAddress, setMyIpAddress] = useState('');

    useEffect(() => {
        getMyIpAddress();
        // displaying my local ip address info on first load
        // disabled to not request from api every time and run out of request credits
        // getIpLocation(myIpAddress);
    }, []);

    async function getMyIpAddress() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            if(!response.ok) throw new Error('there was an error fetching your local ip address');
            const resIp = await response.json();
            setMyIpAddress(resIp.ip);
        } catch(err) {
            console.log('there was an error fetching your local ip address')
        }
    }
    
    async function getIpLocation(ipParam) {
        const ip = ipParam || document.querySelector('.input').value;
        const apiKey = 'at_eOp5vIu8GZbLd41oyvdi2FCnHmK3K';

        try {
            const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ip}`);
            if(!response.ok) throw new Error('there was an error processing you request');
            const responseData = await response.json();
            setData(responseData);
        } catch(err) {
            console.error('there was an error processing you request', err)
        }
    }

    return (
        <div className="container">
            <div className="top">
                <h1>IP Address Tracker</h1>
                <Search onSubmit={getIpLocation} />
                <IpAddressInfo info={data != '' && {
                    ip: data.ip,
                    country: data.location.country,
                    region: data.location.region,
                    timezone: data.location.timezone,
                    isp: data.isp,
                }} />
            </div>
            <Map address={data != '' && {region: data.location.region}} />
        </div>
    );
}

export default Tracker;