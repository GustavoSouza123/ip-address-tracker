import React from "react";
import "../css/Map.css"

function Map() {
    window.onload = () => {
        var map = L.map('map', {
            center: [51.505, -0.09],
            zoom: 13
        });
    }

    return (
        <>
            <div id="map"></div>
        </>
    );
}

function handleLoad() {
    alert('ola')
}

export default Map;