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
