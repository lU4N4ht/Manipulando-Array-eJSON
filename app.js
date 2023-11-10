/*********************************************************************************************************************************************************
 * Objetivo: Criar uma API para responder dados de Estados e Cidades
 * Data: 10/11/2023
 * Autor: Luana
 * Versão: 1.0
 ********************************************************************************************************************************************************/
/***************************
 * Instalações para a API
 *  npm install [] --save
 *  express - Dependencia do node para auxiliar na criação de API
 *  cors - Dependencia do node para manipular recursos de acesso, permissões, etc da API (HEADER)
 *  body-parser - Dependencia do node para auxiliar na chegada de dados na API (BODY)
 * 
 * Quatro métodos:
 * Get - Pegar dados;
 * Post - Envia dados novos;
 * Put - Altera dados existentes;
 * Delete - Apaga dados existentes;
 ***************************/

//Importando as bibliotecas instaladas para o projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request } = require('http');

//Instanciando o express (cria um objeto "app" tendo referencia a classe do express)
const app = express();

/**
 *  Request = quando a nossa API recebe dados;
 *  Response = quando a nossa API devolve dados;
 */

//Função para configurar as permissões do cors
app.use((request, response, next) => {
    //Configura quem poderá fazer requisições na API (* - libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')
    //Libera/Configura os métodos que poderão ser usados na API
    response.header('Access-Control-Allow-Methods', 'Get')
    
    app.use(cors());

    //Faz com que ele de sequência, indo pra próxima função
    next();
})

//EndPoints - pontos de parada quee a nossa API vai ter;
//EndPoints: Listar a sigla de todos os Estados;


//Nomeando - definindo quem controla os metodos - função async de callback
app.get('/estados/sigla', cors(), async function(request, response, next){
    let controleListaEstados = require('./model/function.js')
    let estados = controleListaEstados.getCapitalPais();
    response.json(estados);
    response.status(200);

});

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API FUNCIONOU UPA LELE')
});
