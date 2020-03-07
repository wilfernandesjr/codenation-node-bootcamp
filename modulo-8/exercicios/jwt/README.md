# Adicionando autenticação em uma API de gerenciamento de informações de times de futebol

Vamos adicionar middlewares de autenticação em uma API REST de gerenciamento de times de futebol. 

Nesse desafio, incluiremos essa camada em um CRUD (Create, Read, Update, Delete) já criado para a entidade `teams`, fazendo com que os métodos de `POST`, `PATCH` e `DELETE` só estejam disponíveis através de um header de token fornecido a usuários previamente autenticados no endpoint `/v1/auth/login`.

## Tópicos

Neste desafio, você aprenderá:

- NodeJS;
- APIs REST com Express;
- Autenticação com JWT;
- Testar APIs.

## Requisitos
​
Para este desafio, você precisará de:

- NodeJS LTS (8.12.0+);
- Jest (npm install jest -g);
- Docker.

## Detalhes

O arquivo `docker-compose.yml` está configurado com o necessário para iniciar o banco de dados MariaDB, já com os bancos `codenation_development` e `codenation_test` (usados para os testes de integração e submissão da solução). Para iniciar o banco, execute o comando:

```
$ docker-compose up -d
```

A tabela `teams` será criada através do ORM Sequelize no banco `codenation_development`. Para isso, você deve executar o comando de sync:

```
$ node src/bin/syncDB
```

A API deve conter os seguintes endpoints:

## AUTENTICAÇÃO (ONDE GERA O TOKEN)

### /v1/auth/login

Método: POST

Gera um novo token com prazo de expiração de 1h ao usuário `admin`.

Corpo aceito:
```json
{
  "user": "admin",
  "password": "Admin@123!"
}
```

Resposta (em caso de sucesso na autenticado):
StatusCode: 200
```json
{
  "token": "<TOKEN GERADO>"
}
```

Resposta (em caso de falha na autenticação):
StatusCode: 401
```json
{
  "error": "Invalid user or password."
}
```

## TEAMS ENTITY ENDPOINT

### /v1/teams

Método: GET

Retorna a lista de times cadastrados.

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
      "updatedAt": DATE
    }
  ]
}
```

### /v1/teams/:teamId

Método: GET

Retorna o time cadastrado de acordo com o ID passado por parâmetro na request.

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
  "updatedAt": DATE
}
```

### /v1/teams

Método: POST

Cria um novo cadastro de time. Esse endpoint deverá ser autenticado, através de um token passado em um header da request `x-auth-token`. Esse token é gerado previamente no endpoint `/v1/auth/login`.

Header:
```json
{
  "x-auth-token": "<TOKEN_AQUI>"
}
```

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

Resposta (em caso de sucesso na autenticado):
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

Resposta (em caso de falha na autenticação):
StatusCode: 401
```json
{
  "error": "Invalid token."
}
```

### /v1/teams/:teamId

Método: PATCH

Atualiza os dados de cadastro de time referido no parâmetro `teamId`. Os campos a serem atualizados são opcionais, com exceção do campo `id`, claro. Esse endpoint deverá ser autenticado, através de um token passado em um header da request `x-auth-token`. Esse token é gerado previamente no endpoint `/v1/auth/login`.

Header:
```json
{
  "x-auth-token": "<TOKEN_AQUI>"
}
```

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

Resposta (em caso de sucesso na autenticação):
StatusCode: 200
```json
{}
```

Resposta (em caso de falha na autenticação):
StatusCode: 401
```json
{
  "error": "Invalid token."
}
```

### /v1/teams/:teamId

Método: DELETE

Remove o recurso determinado pelo parâmetro `teamId`. Esse endpoint deverá ser autenticado, através de um token passado em um header da request `x-auth-token`. Esse token é gerado previamente no endpoint `/v1/auth/login`.

Header:
```json
{
  "x-auth-token": "<TOKEN_AQUI>"
}
```

Resposta (em caso de sucesso na autenticado):
StatusCode: 204

Resposta (em caso de falha na autenticação):
StatusCode: 401
```json
{
  "error": "Invalid token."
}
```

...

## Resumo

Nesse desafio, você deve:

1. Criar um endpoint `/v1/auth/login`, que aceita no método `POST` um objeto com user e password que, caso iguais ao user e password do arquivo de config, retorna um objeto com o token, conforme descrito. Caso user e password não estejam de acordo com o arquivo de config, deve retornar um status de erro;

2. Implementar um middleware de autenticação `./middlewares/auth.js` que verifica o token passado no header da request `x-auth-token` e, caso validado, continue para o controller da rota. Caso contrário, ele retorna uma mensagem de erro de autenticação ao usuário, conforme o descrito;

3. Adicionar o middleware de autenticação nos métodos `POST`, `PATCH` e `DELETE` da rota `/v1/teams`.

Deixamos um arquivo de teste para que você possa implementar os seus testes de integração se quiser. Eles não são levados em consideração na pontuação final.

Obs.: tente usar o mínimo de bibliotecas possível.