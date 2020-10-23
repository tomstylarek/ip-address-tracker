import React, { useState } from 'react';
import Header from './Header';
import Map from './Map';

const KEY = "at_avwGPVei82VCY2mJmZq6qwqzm3n0P";

function App() {
  const [ IP, setIP ] = useState("");
  const [ error, setError ] = useState(false);

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
      .then(data => console.log(data.ip, data.isp));
    } else {
      setError(true);
    }
  }

  return (
    <div className="App">
      <Header 
        IP={IP} 
        error={error}
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
      <Map />
    </div>
  )
}

export default App;
