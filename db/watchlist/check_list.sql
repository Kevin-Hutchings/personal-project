SELECT title FROM watchlist
JOIN users ON watchlist.users = users.id
WHERE title = $1 AND users.id = $2;