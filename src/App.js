import React, { useState } from 'react';
import Header from './Header';
import Map from './Map';

const KEY = "at_avwGPVei82VCY2mJmZq6qwqzm3n0P";
const IPRegex = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;

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

    if (IPRegex.test(IP)) {
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
