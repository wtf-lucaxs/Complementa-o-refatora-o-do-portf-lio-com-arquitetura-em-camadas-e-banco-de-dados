CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS perfil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    descricao TEXT
);

CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_perfil INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    horas INT NOT NULL,
    FOREIGN KEY (fk_perfil) REFERENCES perfil(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS certificados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_perfil INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    ano INT NOT NULL,
    FOREIGN KEY (fk_perfil) REFERENCES perfil(id) ON DELETE CASCADE
);

INSERT INTO perfil (id, nome, email, descricao) VALUES 
(1, 'Lucas Daniel Mendes Kuller', 'lucas.daniel@escola.com', 'Estudante Técnico em Análise de Sistemas no Colégio Kennedy. Desenvolvedor Front-end e entusiasta de IA.');

INSERT INTO cursos (fk_perfil, nome, horas) VALUES 
(1, 'C: conhecendo a Linguagem das Linguagens', 8),
(1, 'Praticando Python: laços for e while', 2),
(1, 'Praticando Python: condicionais if, elif e else', 2);

INSERT INTO certificados (fk_perfil, titulo, year) VALUES 
(1, 'Formação Back-end Alura', 2025);
