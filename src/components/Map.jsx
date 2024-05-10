import React from "react";
import { useState, useEffect } from "react";
import "../css/Map.css";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: 'calc(100vh - 280px)',
};

function Map({ address }) {
    const [coordinates, setCoordinates] = useState({});

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCiC0gh2jLvKY30FQDM-rFSFzeD91m8flw',
        libraries,
    });

    const center = {
        lat: coordinates.lat || '', // default latitude
        lng: coordinates.lng || '', // default longitude
    };

    useEffect(() => {
        getCoordinates('São Paulo');
    }, []);
    
    async function getCoordinates(address) {
        const geoApiKey = 'AIzaSyBZuPdZMbRf0C87FplCamGh8V5VtQNoyLg'; 
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoApiKey}`);
            if(!response.ok) throw new Error('there was an error fetching the coordinates of your address');
            const resCoordinates = await response.json();
            setCoordinates(resCoordinates.results[0].geometry.location);
        } catch(err) {
            console.log('there was an error fetching the coordinates of your address');
        }
    }

    if(loadError) {
        return <div>Error loading maps</div>
    }
    if(!isLoaded) {
        return <div>Loading maps</div>
    }

    return (
        <div id="map">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
}

export default Map;