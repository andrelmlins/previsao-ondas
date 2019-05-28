# API de Previsão de ondas


API de previsão de ondas no Brasil feita através de um WebScraping na área de ondas do INPE, acesse através do [Link](https://api-previsao-ondas.herokuapp.com/).

[![Build Status](https://travis-ci.com/andrelmlins/api-previsao-ondas.svg?branch=master)](https://travis-ci.com/andrelmlins/api-previsao-ondas)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/api-previsao-ondas/blob/master/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/andrelmlins/api-previsao-ondas/badge.svg)](https://snyk.io/test/github/andrelmlins/api-previsao-ondas)
[![Dependencies](https://david-dm.org/andrelmlins/api-previsao-ondas.svg)](https://david-dm.org/andrelmlins/api-previsao-ondas)

## Como rodar

```
# instalar as dependências
yarn install

# iniciar a API
yarn start
```

## Como usar

* Estados Litorâneos -> http://api-previsao-ondas.herokuapp.com/litoral/estados
* Detalhes do Estado: -> http://api-previsao-ondas.herokuapp.com/litoral/estado/PE
* Previsão de Ondas por Cidade: -> http://api-previsao-ondas.herokuapp.com/ondas/cidade/1058

## Stack

- NodeJS
- Express
- Cheerio
- Axios
