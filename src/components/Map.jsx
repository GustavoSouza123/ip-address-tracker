import React from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import location from "../assets/icon-location.svg";

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

    const mapOptions = {
        disableDefaultUI: true
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
                options={mapOptions}
            >
                <Marker position={center} icon={location} />
            </GoogleMap>
        </div>
    );
}

export default Map;