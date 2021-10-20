const getPreview = (req, res) => {
    const db = req.app.get('db');
    db.movie.get_preview()
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(500).send('error: ', err))
}

module.exports = {
    getPreview,
}