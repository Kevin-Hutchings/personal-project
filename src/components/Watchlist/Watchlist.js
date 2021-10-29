import React, { useContext } from 'react';
import { UserContext } from '../../context/context';
import { useSelector } from 'react-redux';
// import { deleteTitle } from '../../redux/reducer';
import './Watchlist.css';

const Watchlist = () => {
    const { user } = useContext(UserContext);
    const title = useSelector(state => state.title)
    return(
        <div className='watchlist'>
            {user.id ? (
                <div>
                    <h2> watchlist: logged in </h2>
                    <h2> {title} </h2>
                </div>
            ) : (
                <h2> watchlist: not logged in </h2>
            )}
        </div>
    )
}

export default Watchlist;