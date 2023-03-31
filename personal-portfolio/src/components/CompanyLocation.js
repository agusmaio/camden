import React from "react";
import Map from "./Map";

const CompanyLocation = ({ apiKey }) => {
  const location = { lat: -34.6010813, lng: -58.4973358 };

  const mapStyle = [
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  return (
    <div>
      <h2>Ubicación de la empresa:</h2>
      <Map apiKey={apiKey} location={location} mapStyle={mapStyle} />
    </div>
  );
};

export default CompanyLocation;
