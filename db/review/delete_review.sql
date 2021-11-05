DELETE FROM review
WHERE id = $1 AND user = $2;