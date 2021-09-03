import React, { useEffect, useState } from "react";

const App = () => {

  const [latt, setLatt] = useState("")
  const [lngt, setLngt] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLatt(position.coords.latitude)
      setLngt(position.coords.longitude)
    });
  }, [])

  return (
    <div>
      <div>
        <h4>get Lattitude and Longitude</h4>
        <h4>(Lattitude,Longitude) : {latt},{lngt}</h4>
      </div>
    </div>
  )
}


export default App;