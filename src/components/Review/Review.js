import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { UserContext } from "../../context/context";
// import { ACTIONS } from "../../redux/reviewReducer";
import axios from "axios";
import "./Review.css";

const Review = (props) => {
  const { user } = useContext(UserContext);
  const [review, setReview] = useState("");
  const [input, setInput] = useState("");
  const history = useHistory();
  // const review = useSelector((state) => state.review.review);
  // const dispatch = useDispatch();

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

  const handleSubmit = async (review, movieid, userid) => {
    try {
      await axios.post(`/api/review/add/${props.id}`, {
        review,
        movieid,
        userid,
      });
    } catch (e) {
      console.log(e);
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
