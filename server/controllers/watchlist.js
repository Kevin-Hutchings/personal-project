const addTitle = async (req, res) => {
  const { title, userid, movieid } = req.body;
  const db = req.app.get("db");
  const result = await db.watchlist.check_list(title, userid);
  const duplicate = result[0];

  try {
    if (duplicate) {
      res.sendStatus(404);
    } else {
      db.watchlist
        .add_title(title, userid, movieid)
        .then(
          db.watchlist
            .get_list(userid)
            .then((data) => res.status(200).send(data))
        )
    }
  } catch (err) {
    res.status(404).send(err)
  }
};

const removeTitle = (req, res) => {
  const { id, title } = req.params;
  const db = req.app.get("db");
  db.watchlist
    .remove_title(id, title)
    .then(
      db.watchlist.get_list([id]).then((data) => res.status(200).send(data))
    )
    .catch((err) => res.status(404).send(err));
};

const getList = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");
  db.watchlist
    .get_list([id])
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err));
};

module.exports = {
  addTitle,
  removeTitle,
  getList,
};
