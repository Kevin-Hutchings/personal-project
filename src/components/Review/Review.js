import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/context";
import axios from "axios";
import "../../css/components/Review.css";

const Review = (props) => {
  const { user } = useContext(UserContext);
  const [review, setReview] = useState("");
  const [input, setInput] = useState("");
  const history = useHistory();

  useEffect(() => {
    try {
      axios
        .get(`/api/review/${props.id}/${user.id}`)
        .then(({ data }) => setReview(...data));
    } catch (e) {
      console.log(e);
    }
  }, [props.id, user.id]);

  const handleInput = (val) => {
    setInput(val);
  };

  const handleSubmit = (review, movieid, userid) => {
    try {
      axios.post(`/api/review/add/${props.id}`, {
        review,
        movieid,
        userid,
      });
    } catch (err) {
      console.log(err);
    } 
  };

  const handleDelete = (movieid, userid) => {
    try {
      axios.delete(`/api/review/delete/${props.id}/${user.id}`, {
        movieid,
        userid,
      });
      history.go(0);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {review ? (
        <div className="review-display">
          <h3>Your Review:</h3>
          {review.review}
          <button onClick={() => handleDelete(props.id, user.id)}>
            Delete
          </button>
        </div>
      ) : (
        <form className="review-form">
          <textarea
            onChange={(e) => handleInput(e.target.value)}
            value={input}
            placeholder="Your review goes here!"
            id="review"
            name="review"
            rows="7"
            cols="60"
            maxlength="2000"
          ></textarea>
          <button onClick={() => handleSubmit(input, props.id, user.id)}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Review;
