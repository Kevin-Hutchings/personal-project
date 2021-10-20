const getMovie = (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    db.movie.get_movies(id)
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
}

module.exports = {
    getMovie,
}