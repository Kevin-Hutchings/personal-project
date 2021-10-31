import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/context';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/reviewReducer'
import axios from 'axios';
import './Review.css';

const Review = () => {
    const { user } = useContext(UserContext);
    const review = useSelector(state => state.review.review);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     try{
    //         const req = axios.get(`/api/review/${user.id}`);
    //         dispatch({
    //             type: ACTIONS.GET_REVIEW,
    //             payload: req.data
    //         })
    //     } catch (e) { console.log(e) }
    // }, [])

    // return (
    //     <div>
    //         {user.id ? (
    //             {review}
    //         ) : (
    //             <form className='review'>
    //                 <input />
    //                 <button>Submit</button>
    //             </form>
    //         )}
    //     </div>
    // )
    return (
        <form className='review'>
            <input />
            <button>Submit</button>
        </form>
    )
}

export default Review;