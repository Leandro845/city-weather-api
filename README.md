Weather API Server

This Node.js server uses Express framework to provide real-time weather data for user-specified cities and states. It utilizes the 'weather-js' library to fetch weather information based on city and state parameters provided in the URL.
Installation

    Make sure you have Node.js installed on your system.
    Clone or download the project repository.
    Navigate to the project directory in your terminal.
    Run npm install to install dependencies.

Usage

    Start the server by running node app.js.
    Access the API endpoint by making GET requests to http://localhost:9999/city/state, where city is the name of the city and state is the name of the state.
    The server will respond with real-time weather data in JSON format.

Dependencies

    Express: Fast, unopinionated, minimalist web framework for Node.js.
    weather-js: Simple and easy-to-use weather module for Node.js, with no dependencies.

Example

  Request:

    GET http://localhost:9999/new+york/ny

  Response:

    {
    "location": {
      "name": "New York, NY",
      "degreetype": "C",
      "temperature": "12",
      "feelslike": "10",
      "wind": "10 km/h"
      // other weather data...
      }
    }

Feel free to customize and extend this readme as needed!


#### Em portugues ####


Servidor da API de Clima

Este servidor Node.js utiliza o framework Express para fornecer dados de clima em tempo real para cidades e estados especificados pelo usuário. Ele utiliza a biblioteca 'weather-js' para buscar informações climáticas com base nos parâmetros de cidade e estado fornecidos na URL.
Instalação

    Certifique-se de ter o Node.js instalado no seu sistema.
    Clone ou baixe o repositório do projeto.
    Navegue até o diretório do projeto no seu terminal.
    Execute npm install para instalar as dependências.

Uso

    Inicie o servidor executando node app.js.
    Acesse o ponto de extremidade da API fazendo solicitações GET para http://localhost:9999/cidade/estado, onde cidade é o nome da cidade e estado é o nome do estado.
    O servidor responderá com dados de clima em tempo real no formato JSON.

Dependências

    Express: Framework web rápido, sem opiniões, minimalista para Node.js.
    weather-js: Módulo de clima simples e fácil de usar para Node.js, sem dependências.

Exemplo

  Request:
  
    GET http://localhost:9999/nova+york/ny

  Response:

    {
    "localização": {
      "nome": "Nova York, NY",
      "tipo_de_grau": "C",
      "temperatura": "12",
      "sensação_termica": "10",
      "vento": "10 km/h"
      // outros dados de clima...
      }
    }

Sinta-se à vontade para personalizar e expandir este readme conforme necessário!


