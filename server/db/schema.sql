DROP DATABASE IF EXISTS movieQuotes;

CREATE DATABASE movieQuotes;

USE movieQuotes;

CREATE TABLE randomMovieQuotes (
  id INT NOT NULL AUTO_INCREMENT,
  quote VARCHAR(70),
  PRIMARY KEY (id)
);

insert into randomMovieQuotes (quote) values ('That will do Pig, that will do'), ('What do tigers dream of when they take a little snooze?'), ('I am vengence! I am the night! I am Batman!'), ('I am McLovin'), ('Billyyyy');