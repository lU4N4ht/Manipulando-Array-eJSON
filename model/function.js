/************************************************************************************************************************
 * Objetivo: Realizando funções para trazer informações sobre os estados do Brasil
 * Data: 20/10/2023
 * Autor: Luana
 * Versão: 1.0
*************************************************************************************************************************/
var jsonEstados = require('./estados_cidades.js')

const getListaDeEstados = function () {
    let estadosCidades = jsonEstados.estadosCidades;
    let estados = estadosCidades.estados
    let ufArray = [];

    estados.forEach(function(informacoesEstados){    
         ufArray.push(informacoesEstados.sigla);
   
    })
   
    let informacaoFinal = { uf : ufArray, quantidade : ufArray.length}

     return informacaoFinal

}

const getDadosEstados = function (){
    let estadosCidades = jsonEstados.estadosCidades;
    let estados = estadosCidades.estados
    let ufArray = [];
    let descricaoArray = [];
    let capitalArray = [];
    let regiaoArray = [];

    estados.forEach(function(informacoesEstados){  
        ufArray.push(informacoesEstados.sigla)
        descricaoArray.push(informacoesEstados.nome)
        capitalArray.push(informacoesEstados.capital)
        regiaoArray.push(informacoesEstados.regiao)
      
    })
   
    let informacaoFinal = {uf : ufArray[1], descricao : descricaoArray[1], capital : capitalArray[1], regiao : regiaoArray[1] }

    return informacaoFinal


}

const getCapitalEstado = function (){
    let estadosCidades = jsonEstados.estadosCidades;
    let estados = estadosCidades.estados
    let ufArray = [];
    let descricaoArray = [];
    let capitalArray = [];

    estados.forEach(function(informacoesEstados){  
        ufArray.push(informacoesEstados.sigla)
        descricaoArray.push(informacoesEstados.nome)
        capitalArray.push(informacoesEstados.capital)
      
    })
   
    let informacaoFinal = {uf : ufArray[1], descricao : descricaoArray[1], capital : capitalArray[1] }

    return informacaoFinal
}

getListaDeEstados();
getDadosEstados();
getCapitalEstado();