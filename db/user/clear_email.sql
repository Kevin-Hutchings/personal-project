UPDATE users
SET email = null
WHERE id = $1;