import React from "react";
import "../css/Map.css";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: 'calc(100vh - 280px)',
};

function Map({ coordinates }) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCiC0gh2jLvKY30FQDM-rFSFzeD91m8flw',
        libraries,
    });

    const center = {
        lat: coordinates.lat || '', // default latitude
        lng: coordinates.lng || '', // default longitude
    };

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
                zoom={7}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
}

export default Map;