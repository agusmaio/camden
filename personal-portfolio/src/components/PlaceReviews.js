import React, { useState, useEffect } from "react";
import { API_KEY } from "../config";

const PlaceReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setReviews(data.result.reviews));
  }, [placeId]);

  return (
    <div>
      <h2>Opiniones de clientes:</h2>
      {reviews.map((review) => (
        <div key={review}>
          <h3>{review.author_name}</h3>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PlaceReviews;
