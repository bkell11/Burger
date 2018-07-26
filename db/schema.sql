Create database burgers_db;

use burgers_db;

Create table burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devoured boolean DEFAULT false,
    PRIMARY KEY (id)
);