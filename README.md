# 🌊 API de Previsão de Ondas 🌊

API de previsão de ondas no Brasil feita através de um WebScraping na área de ondas do INPE, acesse através do [Link](https://previsao-ondas.herokuapp.com/).

[![Build Status](https://travis-ci.com/andrelmlins/previsao-ondas.svg?branch=master)](https://travis-ci.com/andrelmlins/previsao-ondas)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/previsao-ondas/blob/master/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/andrelmlins/previsao-ondas/badge.svg)](https://snyk.io/test/github/andrelmlins/previsao-ondas)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/previsao-ondas.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/previsao-ondas/context:javascript)

## Como rodar

```
# instalar as dependências
yarn install

# iniciar a API
yarn start
```

## Documentação

A documentação feita através do [Swagger](https://swagger.io/) se encontra em [Link](https://previsao-ondas.herokuapp.com/api-docs).

## Como usar

Abaixo a lista básica de rotas

- Estados Litorâneos -> http://previsao-ondas.herokuapp.com/litoral/estados
- Detalhes do Estado: -> http://previsao-ondas.herokuapp.com/litoral/estado/PE
- Previsão de Ondas por Cidade: -> http://previsao-ondas.herokuapp.com/ondas/cidade/1058

## Docker

[![dockeri.co](https://dockeri.co/image/andrelmlins1/previsao-ondas)](https://hub.docker.com/r/andrelmlins1/previsao-ondas)

A imagem docker oficial disponívelse encontra em [Dockerhub](https://hub.docker.com/r/andrelmlins1/freesoccer):

```
$ docker pull andrelmlins1/previsao-ondas
$ docker run -d -p 80:8080 --name andrelmlins1/previsao-ondas
```

## Tecnologias

- NodeJS
- Express
- Cheerio
- Axios
