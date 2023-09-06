import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { API_KEY } from "../config";

// Temporary Location + profile map marker using a random location
const MapView = () => {

  const center = {
    lat: -33.91894,
    lng: 151.23116,
  };


  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ height: "100vh", width: "100vw" }}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;