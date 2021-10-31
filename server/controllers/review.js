const createReview = () => {
    const { id } = req.params;
    const { review } = req.body;
    const db = req.app.get('db');

    db.review.create_review([review, id])
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send(err));
}

const getReview = () => {
    const { id } = req.params;
    const db = req.app.get('db');
    db.review.get_review([id])
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
}

const deleteReview = () => {
    const { id } = req.params;
    const db = req.app.get('db');
    db.review.delete_review([id])
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(404).send(err));
}

module.exports = {
    createReview,
    getReview,
    deleteReview,
}
