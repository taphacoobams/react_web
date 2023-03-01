import React, { useRef, useState } from "react";
import Navbar from '../Bar/Navbar';
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css" 
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerRetina from "leaflet/dist/images/marker-icon-2x.png"
import plantMarker from "leaflet/dist/images/plante.png"


Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: markerRetina,
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});


const Carte = () => { 
    const mapRef = useRef();
    const zoom = 11;
    const containerStyle = {
        width: "100%",
        height: "493px",
        top: "10px"
    }
    const center = {
        lat: 48.8499198,
        lng: 2.6370411
    }
    const initialMarkers = [
        {
            position: {
                lat: 48.936181,
                lng: 2.357443
            },
            draggable: true
        },
        {
            position: {
                lat: 48.947274,
                lng: 2.246507
            },
            draggable: false
        },
        {
            position: {
                lat: 48.862725,
                lng: 2.448137
            },
            draggable: true
        },
    ];

    const [markers, setMarkers] = useState(initialMarkers);

    const mapClicked = async (event) => {
        console.log(event.latlng.lat, event.latlng.lng)   
    }

    const markerClicked = (marker, index) => {   
        console.log(marker.position.lat, marker.position.lng) 
    }

    const markerDragEnd = (event, index) => {
        console.log(event.lat, event.lng)
    } 

    return (
        <div style={{ position: "relative" }}>
            <Navbar />
            <MapContainer
            style={containerStyle}
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            ref={mapRef}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapContent
                onClick={mapClicked}
            />
            {markers.map((marker, index) => (
                <MarkerContent
                    key={index}
                    position={marker.position}
                    draggable={marker.draggable}
                    onMarkerClick={event => markerClicked(marker, index)}
                    onDragEnd={event => markerDragEnd(event, index)}
                />
            ))}
           </MapContainer>
        </div> 
    );
};

const MapContent = ({ onClick }) => {  
    const map = useMapEvents({
        click: event => onClick(event)
    }) 
    return null;
}

const MarkerContent = (props) => {
    const markerRef = useRef();
    const { position, draggable, onMarkerClick, onDragEnd } = props;  
    
    return <Marker
        position={position}
        draggable={draggable}
        eventHandlers={{
            click: event => onMarkerClick(event),
            dragend: () => onDragEnd(markerRef.current.getLatLng())
        }}
        ref={markerRef}
        icon={Leaflet.icon({
            iconUrl: plantMarker,
            iconSize: [50, 50],
            iconAnchor: [25, 50]
        })}
    >
        <Popup>
            <b>{position.lat}, {position.lng}</b>
        </Popup>
    </Marker>
}

export default Carte;
