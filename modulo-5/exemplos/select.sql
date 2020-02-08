SELECT * FROM cars_example;

SELECT car_model, year, price FROM cars_example;

SELECT car_model, year, price
FROM cars_example
WHERE year > 2015
ORDER BY year DESC
LIMIT 10;