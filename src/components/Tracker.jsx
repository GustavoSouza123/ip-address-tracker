import React from "react";
import { useState, useEffect } from "react";
import "../css/Tracker.css";
import Search from "./Search";
import IpAddressInfo from "./IpAddressInfo";
import Map from "./Map";

function Tracker() {
    const [data, setData] = useState('');
    const [myIpAddress, setMyIpAddress] = useState('');
    const [coordinates, setCoordinates] = useState({});

    useEffect(() => {
        getMyIpAddress();
        // displaying my local ip address info on first load
        // disabled to not request from api every time and run out of request credits
        // getIpLocation(myIpAddress);
        getCoordinates('São Paulo');
    }, []);

    async function getMyIpAddress() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            if(!response.ok) throw new Error('there was an error fetching your local ip address');
            const resIp = await response.json();
            setMyIpAddress(resIp.ip);
        } catch(err) {
            console.error('there was an error fetching your local ip address')
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
            getCoordinates(responseData.location.region); /* not working here */
        } catch(err) {
            console.error('there was an error processing you request', err)
        }
    }

    async function getCoordinates(address) {
        const geoApiKey = 'AIzaSyBZuPdZMbRf0C87FplCamGh8V5VtQNoyLg'; 
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoApiKey}`);
            if(!response.ok) throw new Error('there was an error fetching the coordinates of your address');
            const resCoordinates = await response.json();
            setCoordinates(resCoordinates.results[0].geometry.location);
        } catch(err) {
            console.error('there was an error fetching the coordinates of your address');
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
            <Map coordinates={{...coordinates}} />
        </div>
    );
}

export default Tracker;