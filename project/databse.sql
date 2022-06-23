DROP DATABASE IF EXISTS house_manager;
DROP USER IF EXISTS 'house_manager'@'localhost';

CREATE DATABASE house_manager;
USE house_manager;

CREATE USER 'house_manager'@'localhost' IDENTIFIED BY 'house_manager';
GRANT ALL PRIVILEGES ON `house_manager`.* TO 'house_manager'@'localhost';

CREATE TABLE plates (
    id int AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    CONSTRAINT plates_pk PRIMARY KEY (id)
)ENGINE=InnoDB;

CREATE TABLE day_concepts (
    id int AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    CONSTRAINT day_concepts_pk PRIMARY KEY (id)
)ENGINE=InnoDB;

CREATE TABLE menu_groups (
    id int AUTO_INCREMENT,
    CONSTRAINT menus_pk PRIMARY KEY (id)
)ENGINE=InnoDB;

CREATE TABLE menus (
    id int AUTO_INCREMENT,
    id_plate_lunch int NOT NULL,
    id_plate_dinner int NOT NULL,
    CONSTRAINT menus_pk PRIMARY KEY (id),
    CONSTRAINT menus_lunch_To_plates FOREIGN KEY (id_plate_lunch) REFERENCES plates(id),
    CONSTRAINT menus_dinner_To_plates FOREIGN KEY (id_plate_dinner) REFERENCES plates(id),
)ENGINE=InnoDB;

CREATE TABLE menu_group_rel (
    id int AUTO_INCREMENT
    id_menu_group int NOT NULL,
    id_menu int NOT NULL,
    CONSTRAINT menu_group_rel_pk PRIMARY KEY (id),
    CONSTRAINT menu_group_rel_To_menu_groups FOREIGN KEY (id_menu_group) REFERENCES menu_groups(id),
    CONSTRAINT menu_group_rel_To_menus FOREIGN KEY (id_menu) REFERENCES menus(id)
)ENGINE=InnoDB;

INSERT INTO day_concepts (name) VALUES ('Lunes');
INSERT INTO day_concepts (name) VALUES ('Martes');
INSERT INTO day_concepts (name) VALUES ('Miércoles');
INSERT INTO day_concepts (name) VALUES ('Jueves');
INSERT INTO day_concepts (name) VALUES ('Viernes');
INSERT INTO day_concepts (name) VALUES ('Sábado');
INSERT INTO day_concepts (name) VALUES ('Domingo');