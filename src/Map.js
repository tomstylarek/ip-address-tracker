import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const TOKEN = "pk.eyJ1IjoidG9tYXNzdHlsYXJlayIsImEiOiJja2dpMGswem4wOWhlMnVuNjIwZnR2ajBkIn0.A4uIS8d94phR-LZ4B7kmFw"

function Map() {
    const [viewport, setViewport] = useState({
      width: "100%",
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 13
    });
  
    return (
      <ReactMapGL
        {...viewport} 
        mapboxApiAccessToken={TOKEN} 
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
    );
}

export default Map