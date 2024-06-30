import React, { useContext, useState } from 'react';
import { UserContext } from '../Pages/UserContext';
import { Link, useNavigate } from "react-router-dom";

const Reviews = ({ reviews, onAddReview }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleAddReview = () => {
    if (!user) {
      alert('Please login to add a review.');
      navigate("/Login");
      return;
    }

    if (!comment.trim()) {
      alert('Please enter a comment.');
      return;
    }
    if (rating < 1 || rating > 5) {
      alert('Please select a rating between 1 and 5.');
      return;
    }

    onAddReview(user.username, rating, comment);
    setComment('');
    setRating(0);
  };

  return (
    <div className='w-full'>
      {user && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Add Your Review</h3>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Write your review..."
          ></textarea>
          <div className="flex items-center mt-2">
            <span className="text-lg font-semibold mr-2">Rating:</span>
            <select
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              className="p-2 border rounded"
            >
              <option value="0">Select Rating...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button
            onClick={handleAddReview}
            className="bg-blue-500 my-4 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Review
          </button>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-md mb-4">
            <div className="flex items-center mb-2">
              <span className="text-lg font-semibold">User:</span>
              <span className="ml-2">{review.username}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-lg font-semibold">Rating:</span>
              <span className="ml-2">{review.rating}/5</span>
            </div>
            <p className="mb-2">{review.comment}</p>
          </div>
        ))}
      </div>

      {!user && (
        <p className="mt-4">
          Please <Link to="/login" className="text-blue-500">login</Link> to add a review.
        </p>
      )}
    </div>
  );
};

export default Reviews;
