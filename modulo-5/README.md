# Módulo 5

O arquivo `docker-compose.yml` configura um container com o necessário para iniciar o banco de dados MariaDB, já com o banco `codenation_aula`.

Para iniciar o banco, vc deve subir o container executando o comando:

```
$ docker-compose up -d
```

Para listar as imagens que estão de pé, execute o comando:

```
$ docker ps
```

Para encerrar o container, execute o comando:

```
docker kill CONTAINER_ID
```
