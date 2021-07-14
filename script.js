var res;
var resAnterior;

function atualizarTela(operacao) {
    var resTxt = document.getElementById("resultado");
    var txtAux;

    switch (operacao) {
        case "somar":
            txtAux = `${resAnterior} + ${res}`;
            break;

        case "subtrair":
            txtAux = `${resAnterior} - ${res}`;
            break;

        case "multiplicar":
            txtAux = `${resAnterior} &#215 ${res}`;
            break;

        case "dividir":
            txtAux = `${resAnterior} &#247 ${res}`;
            break;
            
        case "limpar":
            if (resAnterior) {
                txtAux = String(resAnterior);
            } else {
                txtAux = 0;
            }
            break;

        case "limparTudo":
            txtAux = 0;
            break;

        default:
            txtAux = String(res);
            break;
    }

    resTxt.innerHTML = `<p>${txtAux}</p>`
}

var numero = (n) => {
    if (res == 0 && n == 0) {
        res = 0;
    }
    if (res) {
        res += String(n);
    }
    else {
        res = String(n);
    }
    atualizarTela(null);
}

function limpar() {
    res = 0;
    atualizarTela("limpar");
}

function limparTudo() {
    resAnterior = 0;
    res = 0;
    atualizarTela("limparTudo");
}

function somar() {
    if (resAnterior) {
        res += resAnterior;
    } else {
        resAnterior = res;
    }
    atualizarTela("somar");
}

function subtrair() {

}

function multiplicar() {

}

function dividir() {

}

function calcular() {

}

/*
var res = null;

var inputUsuário = () => {
    return document.getElementById("input-usuario");
};

var resultado = () => {
    return document.getElementById("res");
}

function limpar() {
    inputUsuário().value = "";
}

function limparTudo() {
    resultado().innerHTML = "<p></p>";
    inputUsuário().value = "";
    res = 0;
}

function somar() {
    if (inputUsuário().value){
        res = Number(res) + Number(inputUsuário().value);
        resultado().innerHTML = `<p>${res}</p>`;
        inputUsuário().value = "";
    } else {
        alert("Digite um número válido.")
    }
}

function subtrair() {
    if (inputUsuário().value){
        res = Number(res) - Number(inputUsuário().value);
        resultado().innerHTML = `<p>${res}</p>`;
        inputUsuário().value = "";
    } else {
        alert("Digite um número válido.")
    }
}

function multiplicar() {
    if (inputUsuário().value){
        res = Number(res) * Number(inputUsuário().value);
        resultado().innerHTML = `<p>${res}</p>`;
        inputUsuário().value = "";
    } else {
        alert("Digite um número válido.")
    }
}

function dividir() {
    if (inputUsuário().value){
        res = Number(res) / Number(inputUsuário().value);
        resultado().innerHTML = `<p>${res}</p>`;
        inputUsuário().value = "";
    } else {
        alert("Digite um número válido.")
    }
}
*/