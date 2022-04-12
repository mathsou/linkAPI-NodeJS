
# Teste prático LinkAPI

## Sobre o projeto

Este é o meu teste prático para a LinkAPI de uma API feita em NodeJS versão 16.14.2, utilizando Express e Sequelize, com o modelo MVC.

## Como iniciar o projeto e fazer a primeira configuração

Após ser feito o clone da aplicação, já tendo o composer instalado,é preciso instalar as bibliotecas utilizadas, utilize o seguinte comando:
```
npm install
```
Com tudo instalado, é necessário configurar o banco de dados MySQL, no arquivo .env.example, localizado na raiz do projeto, é necessário renomear ele para .env e colocar os dados do seu banco de dados. 
```
PORT=3000
DB_HOST=[SERVIDOR DO BANCO]
DB_USER=[USUÁRIO]
DB_PASS=[SENHA]
DB_NAME=-[NOME DA TABELA]
```
Substitua as palavras entre conchetes por suas configurações.

 É necessário criar o banco de dados que foi pré configurado. as tabelas para a criação estão diponíveis abaixo:
 
 Tabela de tipos de Jobs
 
  ```
CREATE TABLE recurrencetype (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  createdAt datetime DEFAULT NULL,
  updatedAt datetime DEFAULT NULL,
  deletedAt datetime DEFAULT NULL,
  PRIMARY KEY (id)
)
  ```
 
Tabela de usuários
 ```
CREATE TABLE users (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(80) NOT NULL,
  password varchar(40) NOT NULL,
  phone varchar(11) NOT NULL,
  createdAt datetime DEFAULT NULL,
  updatedAt datetime DEFAULT NULL,
  deletedAt datetime DEFAULT NULL,
  PRIMARY KEY (id)
)
 ```
 
 Tabela de Jobs
 
 ```
 CREATE TABLE jobs (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  status tinyint(1) NOT NULL,
  userId int unsigned NOT NULL,
  recurrenceTypeId int unsigned NOT NULL,
  recurrenceValue varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  recurrencePeriod varchar(10) NOT NULL,
  createdAt datetime DEFAULT NULL,
  updatedAt datetime DEFAULT NULL,
  deletedAt datetime DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT `job_FK` FOREIGN KEY (userId) REFERENCES users (id),
  CONSTRAINT `jobs_FK` FOREIGN KEY (userId) REFERENCES users (id)
)
 ```
 
 Dados necessários na tabela
 
 ```
 INSERT INTO `recurrencetype` VALUES 
  (1,'Intervalo','2022-04-09 17:42:23','2022-04-09 17:42:23',NULL),
  (2,'horário fixo','2022-04-09 17:42:23','2022-04-09 17:42:23',NULL);
 ```
 
Agora é só rodar com o comando 

```
npm start
```
