SELECT c.id, c.name, c.description, c.color, b.name
FROM `cars` AS c
LEFT JOIN brands AS b ON c.id_brand = b.id;
