import React from 'react';
import useGeoLocation from "./useGeoLocation";

const App = () => {

  const location = useGeoLocation();

  return (
    <div>
      <h2>Your Loaction</h2>
      <br/>
      {
        location.loaded ? JSON.stringify(location) : "Location data not available yet."
      }
    </div>
  );
};

export default App;