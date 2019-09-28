DROP DATABASE IF EXISTS drinks_db;
CREATE DATABASE drinks_db;

CREATE TABLE drinks
(
    id INT NOT NULL
    AUTO_INCREMENT,
  drink_name VARCHAR
    (100) NOT NULL,
  spirit_one VARCHAR
    (100) NOT NULL,
  spirit_two VARCHAR
    (100) NOT NULL,
  spirit_three VARCHAR
    (100) NOT NULL,
  spirit_four VARCHAR
    (100) NOT NULL,
  spirit_five VARCHAR
    (100) NOT NULL,
  mixer_one VARCHAR
    (100) NOT NULL,
  mixer_two VARCHAR
    (100) NOT NULL,
  mixer_three VARCHAR
    (100) NOT NULL,
  mixer_four VARCHAR
    (100) NOT NULL,
  mixer_five VARCHAR
    (100) NOT NULL,
  ice VARCHAR
    (100) NOT NULL,
  tag_one VARCHAR
    (100) NOT NULL,
  tag_two VARCHAR
    (100) NOT NULL,
  tag_three VARCHAR
    (100) NOT NULL,
  tag_four VARCHAR
    (100) NOT NULL,
  tag_five VARCHAR
    (100) NOT NULL,
  syrup VARCHAR
    (100) NOT NULL,
  garnish integer
    (100) NOT NULL,
  PRIMARY KEY
    (id)
);

    -- INSERT INTO drinks
    -- VALUES
    --     (drink_name,
    --         spirit_one,
    --         spirit_two,
    --         spirit_three,
    --         spirit_four,
    --         spirit_five,
    --         mixer_one,
    --         mixer_two,
    --         mixer_three,
    --         mixer_four,
    --         mixer_five,
    --         ice,
    --         tag_one,
    --         tag_two,
    --         tag_three,
    --         tag_four,
    --         tag_five,
    --         syrup,
    --         garnish)
    -- ;

    INSERT INTO drinks
    VALUES
        (rum & coke ,
            spiced
    rum,
            rumchata,
            none,
            none,
            none,
            coke,
            none,
            none,
            none,
            none,
            yes ice,
            rum,
            none,
            none,
            none,
            none,
            none,
            none)
    ;