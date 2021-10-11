import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

const Movies = () => {
    const [preview, setPreview] = useState([]);

    useEffect(() => {
        axios.get('/api/movies/preview')
        .then(({ data }) => setPreview(data))
        .catch(err => console.log(err))
    }, []);

    const previewMap = preview.map((el, index) => {
        return(
            <div className='preview'>
                <img className='preview-image' src={el.img} alt='movie poster' />
                <h4 key={index}> {el.title} ( {el.release_date} ) </h4>
            </div>
        )
    })

    return(
        <div className='catalog'>
            {previewMap} 
        </div>
    );
}

export default Movies;