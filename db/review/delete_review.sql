DELETE FROM review
WHERE user = $1 AND id = $2;