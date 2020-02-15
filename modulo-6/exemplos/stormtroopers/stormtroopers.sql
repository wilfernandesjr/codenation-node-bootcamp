CREATE TABLE `stormtroopers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `id_patent` int(10) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO stormtroopers VALUES (null, 'Roberto Peçanha Neto', 'Peçanhinha', 1);
INSERT INTO stormtroopers VALUES (null, 'Roberto Peçanha Junior', 'Peçanha', 2);
INSERT INTO stormtroopers VALUES (null, 'Roberto Peçanha', 'Peçanhão', 3);
INSERT INTO stormtroopers VALUES (null, 'Carlos Alberto', 'Cazalbé', 1);
INSERT INTO stormtroopers VALUES (null, 'Julinho Foguete', 'Zé Milícia', 2);
INSERT INTO stormtroopers VALUES (null, 'José Quintão', 'Caveira', 2);

-- Sem divisão
INSERT INTO stormtroopers VALUES (null, 'Márcio Quincas', 'Marcinho', 1)
INSERT INTO stormtroopers VALUES (null, 'José Loureiro', 'Lourinho', 1);