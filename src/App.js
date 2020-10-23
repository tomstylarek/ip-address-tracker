import React, { useState } from 'react';
import Header from './Header';
import Map from './Map';

const KEY = "at_avwGPVei82VCY2mJmZq6qwqzm3n0P";

function App() {
  const [ IP, setIP ] = useState("");
  const [ error, setError ] = useState(false);
  const [ data, setData ] = useState({});
  const [ latitude, setLatitude ] = useState(37.8);
  const [ longitude, setLongitude ] = useState(-122.4);

  function handleChange(event) {
    setError(false);
    setIP(event.target.value.toString());
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (IP) {
      const url = `https://geo.ipify.org/api/v1?apiKey=${KEY}&ipAddress=${IP}`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setData({
          ip: data.ip,
          country: data.location.country,
          region: data.location.region,
          city: data.location.city,
          timezone: data.location.timezone,
          isp: data.isp,
        });
        
        setLatitude(data.location.lat);
        setLongitude(data.location.lng);
        console.log(longitude, latitude);
      });
    } else {
      setError(true);
    }
  }

  return (
    <div className="App">
      <Header 
        IP={IP} 
        data={data}
        error={error}
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
      <Map 
        latitude={latitude} 
        longitude={longitude} 
      />
    </div>
  )
}

export default App;
