SELECT * FROM divisions;
SELECT * FROM patents;
SELECT * FROM stormtroopers;
SELECT * FROM stormtrooper_division;

-- LEFT
SELECT
  stormtroopers.id, stormtroopers.name, nickname, patents.name AS patent, divisions.name AS division
FROM stormtroopers
LEFT JOIN stormtrooper_division ON stormtroopers.id = stormtrooper_division.id_stormtrooper
LEFT JOIN patents ON patents.id = stormtroopers.id_patent
LEFT JOIN divisions ON divisions.id = stormtrooper_division.id_division;

-- INNER
SELECT
  stormtroopers.id, stormtroopers.name, nickname, patents.name AS patent, divisions.name AS division
FROM stormtroopers
INNER JOIN stormtrooper_division ON stormtroopers.id = stormtrooper_division.id_stormtrooper
LEFT JOIN patents ON patents.id = stormtroopers.id_patent
LEFT JOIN divisions ON divisions.id = stormtrooper_division.id_division;