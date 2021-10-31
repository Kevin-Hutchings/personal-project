const getMovie = (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    db.movie.get_movies(id)
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
}

const getPreview = (req, res) => {
    const db = req.app.get('db');
    db.movie.get_preview()
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(500).send('error: ', err))
}

module.exports = {
    getMovie,
    getPreview,
}