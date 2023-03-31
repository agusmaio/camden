import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Map = ({ apiKey, location, zoom, mapStyle }) => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: zoom,
      styles: mapStyle,
    });

    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
    });
  }, [apiKey, location, zoom, mapStyle]);

  return <div id="map" style={{ height: "400px" }} />;
};

Map.propTypes = {
  apiKey: PropTypes.string.isRequired,
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  mapStyle: PropTypes.array,
};

Map.defaultProps = {
  zoom: 15,
  mapStyle: [],
};

export default Map;
