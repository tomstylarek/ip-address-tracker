import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const TOKEN = "pk.eyJ1IjoidG9tYXNzdHlsYXJlayIsImEiOiJja2dpMGswem4wOWhlMnVuNjIwZnR2ajBkIn0.A4uIS8d94phR-LZ4B7kmFw"

function Map() {
    const [viewport, setViewport] = useState({
      width: "100%",  // no puede ser responsive porque viene de una API. 
      height: 650,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 13
    });
  
    return (
      <div className="Map">
        <ReactMapGL
          {...viewport} 
          mapboxApiAccessToken={TOKEN} 
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={nextViewport => setViewport(nextViewport)}
        />
      </div>
    );
}

export default Map