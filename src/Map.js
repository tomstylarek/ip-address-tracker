import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

const TOKEN = "pk.eyJ1IjoidG9tYXNzdHlsYXJlayIsImEiOiJja2dpMGswem4wOWhlMnVuNjIwZnR2ajBkIn0.A4uIS8d94phR-LZ4B7kmFw"
const markerStyle = {
  backgroundImage: "url('pin.svg')",
}
function Map(props) {
    return (
      <div className="Map">
        <ReactMapGL
          width="100%" 
          height={650} 
          latitude={props.latitude} 
          longitude={props.longitude} 
          zoom={13} 
          mapboxApiAccessToken={TOKEN} 
          mapStyle="mapbox://styles/mapbox/dark-v9"
        >
          <Marker 
            latitude={props.latitude} 
            longitude={props.longitude} 
            offsetLeft={-20} 
            offsetTop={-10}
          >
            <div style={{ fontSize: "2rem" }}>&#x1f4cc;</div>
          </Marker>
        </ReactMapGL>
      </div>
    );
}

export default Map