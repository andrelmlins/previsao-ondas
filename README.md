# 🌊 API de Previsão de ondas 🌊


API de previsão de ondas no Brasil feita através de um WebScraping na área de ondas do INPE, acesse através do [Link](https://previsao-ondas.herokuapp.com/).

[![Build Status](https://travis-ci.com/andrelmlins/previsao-ondas.svg?branch=master)](https://travis-ci.com/andrelmlins/previsao-ondas)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/previsao-ondas/blob/master/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/andrelmlins/previsao-ondas/badge.svg)](https://snyk.io/test/github/andrelmlins/previsao-ondas)
[![Dependencies](https://david-dm.org/andrelmlins/previsao-ondas.svg)](https://david-dm.org/andrelmlins/previsao-ondas)
[![Badge Docker](https://images.microbadger.com/badges/image/andrelmlins1/previsao-ondas.svg)](https://microbadger.com/images/andrelmlins1/previsao-ondas "Get your own image badge on microbadger.com")
[![Docker Pulls](https://img.shields.io/docker/pulls/andrelmlins1/previsao-ondas.svg)](https://hub.docker.com/r/andrelmlins1/previsao-ondas)

## Como rodar

```
# instalar as dependências
yarn install

# iniciar a API
yarn start
```

## Como usar

* Estados Litorâneos -> http://previsao-ondas.herokuapp.com/litoral/estados
* Detalhes do Estado: -> http://previsao-ondas.herokuapp.com/litoral/estado/PE
* Previsão de Ondas por Cidade: -> http://previsao-ondas.herokuapp.com/ondas/cidade/1058

## Stack

- NodeJS
- Express
- Cheerio
- Axios
