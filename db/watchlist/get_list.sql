SELECT title FROM watchlist
JOIN users ON watchlist.users = users.id
WHERE users.id = $1;