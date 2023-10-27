/************************************************************************************************************************
 * Objetivo: Realizando funções para trazer informações sobre os estados do Brasil
 * Data: 20/10/2023
 * Autor: Luana
 * Versão: 1.0
*************************************************************************************************************************/
var jsonEstados = require('./estados_cidades.js')

const getListaDeEstados = function () {
    let estados = jsonEstados.estadosCidades.estados;
    let ufArray = [];

    estados.forEach(function (informacoesEstados) {

        ufArray.push(informacoesEstados.sigla);

    })

    let informacaoFinal = { uf: ufArray, quantidade: ufArray.length }

    console.log(informacaoFinal)

}

const getDadosEstados = function (getSigla) {
    let sigla = String(getSigla).toUpperCase();
    let estados = jsonEstados.estadosCidades.estados;
    let resultado = {};

    estados.forEach(function (informacoesEstado) {
        if (informacoesEstado.sigla.includes(sigla)) {

            resultado.uf = informacoesEstado.sigla
            resultado.descricao = informacoesEstado.nome
            resultado.capital = informacoesEstado.capital
            resultado.regiao = informacoesEstado.regiao
        }
    })

    console.log(informacaoFinal)
}

const getCapitalEstado = function (getSigla) {
    let sigla = String(getSigla).toUpperCase();
    let estados = jsonEstados.estadosCidades.estados;
    let resultado = {};

    estados.forEach(function (informacoesEstado) {
        if (informacoesEstado.sigla.includes(sigla)) {

            resultado.uf = informacoesEstado.sigla
            resultado.descricao = informacoesEstado.nome
            resultado.capital = informacoesEstado.capital

        }

    })
    console.log(informacaoFinal)
}

const getEstadosRegiao = function (getRegiao) {
    let regiao = String(getRegiao).toUpperCase();
    let estados = jsonEstados.estadosCidades.estados;
    let resultado = {};
    let estadosPorRegiao = {};
    let estadoInfo = [];


    estados.forEach(function (getInfoEstados) {
        if (getInfoEstados.regiao.includes(regiao)) {

            estadosPorRegiao.uf = getInfoEstados.sigla
            estadosPorRegiao.descricao = getInfoEstados.nome

            estadoInfo.push(estadosPorRegiao)

            resultado.regiao = getInfoEstados.regiao
            resultado.estados = estadoInfo

        }

    })
    console.log(estadosPorRegiao)

}

const getCidades = function (getSigla) {
    let sigla = String(getSigla).toUpperCase();
    let estados = jsonEstados.estadosCidades.estados;
    let resultado = {};
    let cidades = [];
    let cidadesNome = estados[2]; 

    estados.forEach(function (informacoesEstado) {
        if (informacoesEstado.sigla.includes(sigla)) {

            cidades.push(informacoesEstado.cidades)

            // resultado.uf = informacoesEstado.sigla
            // resultado.descricao = informacoesEstado.nome
            // resultado.capital = informacoesEstado.capital
            // resultado.regiao = informacoesEstado.regiao
        }
    })

    console.log(cidadesNome)

}

// getListaDeEstados();
// getDadosEstados();
// getCapitalEstado();
// getEstadosRegiao('Sudeste');

getCidades('SP');

