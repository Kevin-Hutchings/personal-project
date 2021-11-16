const createReview = (req, res) => {
  const { id } = req.params;
  const { review, userid } = req.body;
  const db = req.app.get("db");

  db.review
    .create_review(review, id, userid)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err));
};

const getReview = (req, res) => {
  const { id, userid } = req.params;
  const db = req.app.get("db");
  db.review
    .get_review(id, userid)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err));
};

const deleteReview = (req, res) => {
  const { id, userid } = req.params;
  const db = req.app.get("db");
  db.review
    .delete_review(id, userid)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(404).send(err));
};

module.exports = {
  createReview,
  getReview,
  deleteReview,
};
