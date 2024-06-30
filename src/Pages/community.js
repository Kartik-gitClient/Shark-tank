import React, { useState, useEffect } from 'react';
import Reviews from '../Components/Reviews';
import reviewData from "../data/review.json";

const Community = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews([...reviewData.Reviews, ...storedReviews]);
  }, []);

  const addReview = (username, rating, comment) => {
    const newReview = { username, rating, comment, date: new Date().toISOString() };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  return (
    <div className="container my-6 mx-auto p-4 flex">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">Community Reviews</h1>
        <Reviews reviews={reviews} onAddReview={addReview} />
      </div>
    </div>
  );
};

export default Community;
