CREATE TABLE IF NOT EXISTS cars_example (
  id INT AUTO_INCREMENT PRIMARY KEY,
  car_model VARCHAR(255),
  description VARCHAR(255),
  company VARCHAR(255),
  price FLOAT,
  year INT,
  color VARCHAR(255),
  image_url VARCHAR(255)
);
