import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/context';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/reducer';
import axios from 'axios';
// import { deleteTitle } from '../../redux/reducer';
import './Watchlist.css';

const Watchlist = () => {
    const { user } = useContext(UserContext);
    const list = useSelector(state => state.title)
    const dispatch = useDispatch();
    // console.log(list)

    useEffect(() => {
        axios.get(`/api/watchlist/${user.id}`)
        .then((res) => {
            dispatch({
                type: ACTIONS.GET_LIST,
                payload: res.data,
            })
        })
        .catch(err => console.log(err))
    }, [user.id, dispatch]);

    const removeTitle = async (id, title) => {
        try{
            await axios.delete(`/api/watchlist/delete/${id}/${title}`)
            .then((res) => {
                dispatch({
                    type: ACTIONS.DELETE_TITLE,
                    payload: res.data
                })
            })
        } catch (e) { console.log(e) }
    }

    const listMap = list.map((el, index) => {
        return (
            <div className='info'>
                <h3 key={index}> {el.title} </h3>
                <button onClick={() => removeTitle(user.id, el.title)}> - </button>
            </div>
        )
    })

    return(
        <div className='watchlist'>
            {user.id ? (
                <div>
                    <h2> watchlist: logged in </h2>
                    <div> {listMap} </div>
                </div>
            ) : (
                <h2> watchlist: not logged in </h2>
            )}
        </div>
    )
}

export default Watchlist;