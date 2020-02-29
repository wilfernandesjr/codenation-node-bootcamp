# Criando uma API para gerenciar jogadores em times de futebol

Vamos criar uma API REST para gerenciar jogadores em times de futebol. Nesse desafio, vamos criar um CRUD (Create, Read, Update, Delete) para as entidades `teams` e `players`, sendo que cada time pode ter vários jogadores e cada jogador pode ter apenas um time.

## Tópicos

Neste desafio você aprenderá:

- NodeJS
- APIs REST com Express
- MySQL
- Sequelize
- Testar APIs

## Requisitos
​
Para este desafio você precisará de:

- NodeJS LTS (8.12.0+)
- Jest (npm install jest -g)
- Docker

## Detalhes

O arquivo `docker-compose.yml` está configurado com o necessário para iniciar o banco de dados MariaDB, já com os bancos `codenation_development` e `codenation_test` (usado para os testes de integração e submissão da solução). Para iniciar o banco, execute o comando:

```
$ docker-compose up -d
```

Nenhuma tabela foi criada nesse banco e parte do desafio é prover os esquemas das tabela `teams` e `players` através do ORM Sequelize. A estrutura das tabelas deve seguir o proposto:

**Tabela `teams`**
```
id: INT (Primary Key, Unique Key, Auto incremento) // Campo criado automaticamente pelo Sequelize
name: VARCHAR(255)
description: TEXT
coach: VARCHAR(255)
shieldUrl: VARCHAR(255)
birthYear: INT(4)
createdAt: DATE // Campo criado automaticamente pelo Sequelize
updatedAt: DATE // Campo criado automaticamente pelo Sequelize
```

**Tabela `players`**
```
id: INT (Primary Key, Unique Key, Auto incremento) // Campo criado automaticamente pelo Sequelize
name: VARCHAR(255),
nickname: VARCHAR(255),
nationality: VARCHAR(255),
age: INT(2),
wage: INT,
score: INT(3)
createdAt: DATE // Campo criado automaticamente pelo Sequelize
updatedAt: DATE // Campo criado automaticamente pelo Sequelize
teamId: INT // Chave estrangeira criada automaticamente pelo Sequelize ao declarar um relacionamento 1:N entre times e jogadores
```

Não se esqueça de criar o relacionamento entre as tabelas `teams` e `players`, no model.

Para criar as tabela `players` e `teams` no banco `codenation_development`, você primeiro deve implementar os esquemas da tabelas nos arquivos `src/model/players.js` e `src/model/teams.js`, respectivamente, e, se necessário, corrigir as credenciais de acesso ao banco no arquivo `model/index.js` e executar o seguinte comando, na sequência:

```
$ node bin/syncDB
```

A API deve conter os seguintes endpoints:

## TEAMS ENTITY ENDPOINT

### /v1/teams

Método: GET

Retorna a lista de times cadastrados. Para cada time, deve retornar a lista de jogadores cadastrados naquele time.

Resposta:

StatusCode: 200
```json
{
  "total": 1,
  "data": [
    {
      "id": INT,
      "name": STRING,
      "description": TEXT,
      "coach": STRING,
      "shieldUrl": STRING,
      "birthYear": INT,
      "createdAt": DATE,
      "updatedAt": DATE,
      "players": <LIST OF PLAYERS OF THIS TEAM>
    }
  ]
}
```

### /v1/teams/:teamId

Método: GET

Retorna o time cadastrado de acordo com o ID passado por parâmetro na request. Deve retornar uma propriedade `players` com uma lista de jogadores cadastrados naquele time.

Resposta:

StatusCode: 200
```json
{
  "id": INT,
  "name": STRING,
  "description": TEXT,
  "coach": STRING,
  "shieldUrl": STRING,
  "birthYear": INT,
  "createdAt": DATE,
  "updatedAt": DATE,
  "players": <LIST OF PLAYERS OF THIS TEAM>
}
```

### /v1/teams/:teamId/players

Método: GET

Retornar lista com todos os jogadores daquele ID passado por parâmetro.

Resposta:

StatusCode: 200
```json
{
  "total": 1,
  "data": [
    {
      "id": INT,
      "name": STRING,
      "nickname": STRING,
      "nationality": STRING,
      "age": INTEGER(2),
      "wage": INTEGER,
      "score": INTEGER(3),
      "createdAt": DATE,
      "updatedAt": DATE
    }
  ]
}
```

### /v1/teams

Método: POST

Cria um novo cadastro de time.

Corpo aceito:
```json
{
  "name": STRING,
  "description": TEXT,
  "coach": STRING,
  "shieldUrl": STRING,
  "birthYear": INT,
}
```

Resposta:
StatusCode: 201
```json
{
  "id": INT,
  "name": STRING,
  "description": TEXT,
  "coach": STRING,
  "shieldUrl": STRING,
  "birthYear": INT,
  "createdAt": DATE,
  "updatedAt": DATE,
}
```

### /v1/teams/:teamId

Método: PATCH

Atualiza os dados de cadastro de time referido no parâmetro `teamId`. Os campos a serem atualizados são opcionais, com exceção do campo `id`, claro.

Corpo aceito:
```json
{
  "name": STRING,
  "description": TEXT,
  "coach": STRING,
  "shieldUrl": STRING,
  "birthYear": INT,
}
```

Resposta:
StatusCode: 200
```json
{}
```

### /v1/teams/:teamId

Método: DELETE

Remove o recurso determinado pelo parâmetro `teamId`.

Resposta:
StatusCode: 204

## PLAYERS ENTITY ENDPOINT

### /v1/players

Método: GET

Retorna a lista de jogadores cadastrados. Esse endpoint deve aceitar dois query parâmeters: `nationality` e `score`. Se o parâmetro `nationality` estiver preenchido, ele deve retornar somente os jogadores da nacionalidade passada como parâmetro. Caso o parâmetro score estiver preenchido, ele deve retornar somente os jogadores com score igual ou acima ao passado no parâmetro score.

Ex:
/v1/players?nationality=brasileiro
/v1/players?score=90

Resposta:

StatusCode: 200
```json
{
  "total": 1,
  "data": [
    {
      "id": INT,
      "name": STRING,
      "nickname": STRING,
      "nationality": STRING,
      "age": INTEGER(2),
      "wage": INTEGER,
      "score": INTEGER(3),
      "teamId": INTEGER,
      "createdAt": DATE,
      "updatedAt": DATE
    }
  ]
}
```

### /v1/players/:playerId

Método: GET

Retorna o jogadores cadastrado de acordo com o ID passado por parâmetro na request.
Resposta:

StatusCode: 200
```json
{
  "id": INT,
  "name": STRING,
  "nickname": STRING,
  "nationality": STRING,
  "age": INTEGER(2),
  "wage": INTEGER,
  "score": INTEGER(3),
  "teamId": INTEGER,
  "createdAt": DATE,
  "updatedAt": DATE
}
```

### /v1/players

Método: POST

Cria um novo cadastro de jogador.

Corpo aceito:
```json
{
  "name": STRING,
  "nickname": STRING,
  "nationality": STRING,
  "age": INTEGER(2),
  "wage": INTEGER,
  "score": INTEGER(3),
  "teamId": INTEGER
}
```

Resposta:
StatusCode: 201
```json
{
  "id": INT,
  "name": STRING,
  "nickname": STRING,
  "nationality": STRING,
  "age": INTEGER(2),
  "wage": INTEGER,
  "score": INTEGER(3),
  "teamId": INTEGER,
  "createdAt": DATE,
  "updatedAt": DATE,
}
```

### /v1/players/:playerId

Método: PATCH

Atualiza os dados de cadastro de jogador referido no parâmetro `playerId`. Os campos a serem atualizados são opcionais, com exceção do campo `id`, claro.

Corpo aceito:
```json
{
  "name": STRING,
  "nickname": STRING,
  "nationality": STRING,
  "age": INTEGER(2),
  "wage": INTEGER,
  "score": INTEGER(3),
  "teamId": INTEGER
}
```

Resposta:
StatusCode: 200
```json
{}
```

### /v1/players/:playerId

Método: DELETE

Remove o recurso determinado pelo parâmetro `playerId`.

Resposta:
StatusCode: 204

...

## Resumo

Nesse desafio, você deve:

1. Montar os esquemas das tabelas `players` e `teams` e declarar o relacionamento no model, usando o Sequelize;
2. Implementar os endpoins e métodos faltantes, que são:
  - GET /v1/teams
  - GET /v1/teams/:teamId
  - GET /v1/teams/:teamId/players
  - POST /v1/teams
  - GET /v1/players
  - GET /v1/players?nationality=<nacionalidade>&score=<pontuacao>
  - GET /v1/players/:teamId
  - POST /v1/players

Deixamos um arquivo de teste para que vc possa implementar os seus testes de integração, caso queira. Eles não são levados em consideração na pontuação final.


Obs.: Tente usar o mínimo de bibliotecas possível
