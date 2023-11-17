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
    let estados = controleListaEstados.getListaDeEstados();
    response.json(estados);
    response.status(200);

});


//Dois pontos = a palavra uf nao é uma parte do endpoint, é criar uma variável para o endpoint
//Endpoint: Retorna os dados do estado filtrado pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){
   //Recebe uma variável encaminhada por parametro na URL da requisição
    let siglaEstado = request.params.uf
    //Esse import poderia ser feito fora
    let controleDadosEstados = require('./model/function.js');
    let dadosEstado = controleDadosEstados.getDadosEstados(siglaEstado);

    if(dadosEstado){
        response.json(dadosEstado);
        response.status(200);
    } else{
        response.status(404)
        response.json({erro:'Não foi possível encontrar um item.'})
    }
});

//Retorna informações da Capital filtrando pela sigla via query
app.get('/capital/estado', cors(), async function(request, response, next){
    //Recebe parametros via query, que são variaveis encaminhadas na URL da requisição (?uf=SP)
     let siglaEstado = request.query.uf
     let controleDadosEstados = require('./model/function.js');
     let dadosCapital = controleDadosEstados.getCapitalEstado(siglaEstado);
 
     if(dadosCapital){
         response.json(dadosCapital);
         response.status(200);
     } else{
         response.status(404)
         response.json({erro:'Não foi possível encontrar um item.'})
     }
 });

 app.get('/regiao/estado', cors(), async function(request, response, next){
     let NomeRegiao = request.query.regiao
     let controleDadosEstados = require('./model/function.js');
     let dadosRegiao = controleDadosEstados.getEstadosRegiao(NomeRegiao);
 
     if(dadosRegiao){
         response.json(dadosRegiao);
         response.status(200);
     } else{
         response.status(404)
         response.json({erro:'Não foi possível encontrar um item.'})
     }
 });

 app.get('/estados/cidades/sigla', cors(), async function(request, response, next){
    let siglaEstado = request.query.uf
    let controleDadosEstados = require('./model/function.js');
    let dadosCidades = controleDadosEstados.getCidades(siglaEstado);

    if(dadosCidades){
        response.json(dadosCidades);
        response.status(200);
    } else{
        response.status(404)
        response.json({erro:'Não foi possível encontrar um item.'})
    }
});

app.get('/capital/pais', cors(), async function(request, response, next){
    let controleListaCapitais = require('./model/function.js')
    let capitais = controleListaCapitais.getCapitalPais();
    response.json(capitais);
    response.status(200);

});

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API FUNCIONOU UPA LELE')
});
