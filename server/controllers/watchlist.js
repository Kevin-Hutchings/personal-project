const addTitle = (req, res) => {
    const { title, id} = req.body;
    const db = req.app.get('db');
    db.watchlist.add_title(title, id)
    .then((data) => res.status(200).send(data))
    .catch(err => res.status(404).send(err));
}

const removeTitle = (req, res) => {
    const { id, title } = req.params;
    const db = req.app.get('db');
    db.watchlist.remove_title(id, title)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
}

const getList = (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');
    db.watchlist.get_list([id])
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err))
}

module.exports = {
    addTitle,
    removeTitle,
    getList,
} 