SELECT review FROM reviews
JOIN users ON reviews.users = users.id 
JOIN movies ON reviews.movie = movies.id
WHERE movies.id = $1 AND users.id = $2;