import React, { useContext } from 'react';
import { UserContext } from '../../context/context';
import './Watchlist.css';

const Watchlist = () => {
    const { user } = useContext(UserContext);

    return(
        <div className='watchlist'>
            {user.id ? (
                <div>
                    <h2> watchlist: logged in </h2>
                </div>
            ) : (
                <h2> watchlist: not logged in </h2>
            )}
        </div>
    )
}

export default Watchlist;