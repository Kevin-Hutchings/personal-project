DELETE FROM watchlist
WHERE users = $1 AND title = $2;