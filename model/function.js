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

   return informacaoFinal;

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

   return informacaoFinal;
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
    return informacaoFinal;
}

const getEstadosRegiao = function (getRegiao) {
    let regiao = String(getRegiao).toUpperCase();
    let estados = jsonEstados.estadosCidades.estados;
    let estadosPorRegiao = {};
    let estadoInfo = [];
    estadosPorRegiao.regiao = regiao;
    estadosPorRegiao.estados = estadoInfo;

    estados.forEach(function (getInfoEstados) {
        if ((getInfoEstados.regiao.toUpperCase()).includes(regiao)) {

            let resultado = {};
        
            resultado.uf = getInfoEstados.sigla
            resultado.descricao = getInfoEstados.nome
            estadoInfo.push(resultado)

        }

    })

    return estadosPorRegiao;

}

const getCidades = function(getSigla){
    const estados = jsonEstados.estadosCidades.estados;
    let sigla = String(getSigla).toUpperCase();
    let estadosCidades = {};
    let cidades = [];
    estadosCidades.cidades = cidades;


    estados.forEach(function (getInfoEstados) {
        if (getInfoEstados.sigla.includes(sigla)) {

            estadosCidades.uf = getInfoEstados.sigla
            estadosCidades.descricao = getInfoEstados.nome
            estadosCidades.quantidade_cidades = getInfoEstados.cidades.length

            getInfoEstados.cidades.forEach( function (cidadeNome) {
                cidades.push(cidadeNome.nome)
            })
        }

    })
    
    return estadosCidades;

}
const getCapitalPais = function(){
    const estados = jsonEstados.estadosCidades.estados
    let capitaisPais = {}
    let estadoInfo = []
    capitaisPais.capitais = estadoInfo;


    estados.forEach(function (getInfoEstados) {
        if (getInfoEstados.capital_pais != undefined) {

            let resultado = {};
        
            resultado.capital_atual = getInfoEstados.capital_pais.capital
            resultado.uf = getInfoEstados.sigla
            resultado.descricao = getInfoEstados.nome
            resultado.capital = getInfoEstados.capital
            resultado.regiao = getInfoEstados.regiao
            resultado.capital_pais_ano_inicio =  getInfoEstados.capital_pais.ano_inicio
            resultado.capital_pais_ano_termino =  getInfoEstados.capital_pais.ano_fim
            estadoInfo.push(resultado)

        }

    })
    return capitaisPais;

}

// getListaDeEstados();
// getDadosEstados('sp');
// getCapitalEstado('sp');
// getEstadosRegiao('sul');
// getCidades('rj');
// getCapitalPais();

