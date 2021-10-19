import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Movies.css';

const Movies = () => {
    const [preview, setPreview] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('/api/movies')
        .then(({ data }) => setPreview(data))
        .catch(err => console.log(err))
    }, []);

    const previewMap = preview
    .filter(el => el.title.toLowerCase().includes(search.toLowerCase()))
    .map((movie, index) => {
        return(
            <div key={index} className='preview'>
                <Link to={`/movie/${movie.id}`}>
                    <img src={movie.img} alt='movie poster' />
                </Link>
                <h4> {movie.title} ({movie.release_date}) </h4>
            </div>
        )
    })

    return(
        <div>
            <header className='catalog-header'>
                <h1> The Movies of Studio Ghibli</h1>
                <div className='input-container'>
                    <input
                        type='text'
                        placeholder='Search by Title'
                        onChange={e => setSearch(e.target.value)}
                    />
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
