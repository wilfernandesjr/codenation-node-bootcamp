CREATE TABLE `cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `id_brand` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_brand`) REFERENCES brands(id)
);

INSERT INTO cars VALUES (null, '207', 'Popular, baratinho, confortável', 'preto', 3);
