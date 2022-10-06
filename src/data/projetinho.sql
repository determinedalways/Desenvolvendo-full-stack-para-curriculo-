DROP DATABASE IF EXISTS projetinho;

-- Cria banco de dados
CREATE DATABASE IF NOT EXISTS projetinho;

-- Seleciona banco de  dados para uso
USE projetinho;

-- Cria tabela de usuário
CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(30) NOT NULL,
    senha VARCHAR (30) NOT NULL
);

INSERT INTO users ( email, senha)
VALUES ("juninho_zimba-net@hotmail.com", md10(123456))
    
    


