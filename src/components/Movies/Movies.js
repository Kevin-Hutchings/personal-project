import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
                <Link to={`/movie/${el.id}`}>
                    <img className='preview-image' src={el.img} alt='movie poster' />
                </Link>
                <h4 key={index}> {el.title} ({el.release_date}) </h4>
            </div>
        )
    })

    return(
        <div>
            <header className='catalog-header'>
                <h1> The Movies of Studio Ghibli</h1>
                <div className='catalog-input'>
                    <input />
                    <button> A-Z </button>
                </div>
            </header>
            <div className='catalog'>
                {previewMap} 
            </div>
        </div>
    );
}

export default Movies;