DELETE FROM reviews
WHERE movie = $1 AND users = $2;