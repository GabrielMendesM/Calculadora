var resultado = {
    anterior: "",
    atual: "",
    operação: ""
};

aaa = () => {
    alert(`atual: ${resultado.atual}\nanterior: ${resultado.anterior}\noperação: ${resultado.operação}`);
}

atualizarTela = (operacao) => {
    var resTxt = document.getElementById("resultado");
    var txtAux;

    switch (operacao) {
        case "+":
            txtAux = `${resultado.anterior} + ${resultado.atual}`;
            break;
        
        case "-":
            txtAux = `${resultado.anterior} - ${resultado.atual}`;
            break;

        case "&#215":
            txtAux = `${resultado.anterior} &#215 ${resultado.atual}`;
            break;

        case "&#247":
            txtAux = `${resultado.anterior} &#247 ${resultado.atual}`;
            break;

        case "limpar":
            if (resultado.anterior) {
                txtAux = String(resultado.anterior);
            } else {
                txtAux = 0;
            }
            break;

        case "limparTudo":
            txtAux = 0;
            break;

        case "calcular":
            if (resultado.anterior) {
                txtAux = resultado.anterior;
            } else if (resultado.atual) {
                txtAux = resultado.atual;
            } else {
                txtAux = 0;
            }
            break;

        default:
            if (resultado.anterior) {
                txtAux = `${resultado.anterior} ${resultado.operação} ${resultado.atual}`;
            } else {
                txtAux = `${resultado.atual}`;
            }
            break;
    }
    if (String(txtAux).indexOf(".") !== -1) {
        String().replace(".", ",");
    }
    resTxt.innerHTML = `<p>${txtAux}</p>`;
}

var numero = (n) => {
    if (resultado.anterior && !resultado.atual && !resultado.operação) {
        resultado.anterior = "";
    }
    if (n == -1) {
        if (resultado.atual && String(resultado.atual).indexOf(",") === -1) {
            resultado.atual += ".";
        } else {
            resultado.atual = "0.";
        }
    } else {
        if (resultado.atual == 0 && n == 0) {
            resultado.atual = 0;
        } else {
            if (resultado.atual) {
                resultado.atual == 0 ? resultado.atual = String(n) : resultado.atual += String(n);
            }
            else {
                resultado.atual = String(n);
            }
        }
    }
    atualizarTela(null);
}

operação = (op) => {
    switch (op) {
        case "somar":
            op = "+";
            break;

        case "subtrair":
            op = "-";
            break;

        case "multiplicar":
            op = "&#215";
            break;

        case "dividir":
            op = "&#247";
            break;
    }
    if (resultado.anterior) {
        calcular();
    } else if (resultado.atual) {
        resultado.anterior = resultado.atual;
    } else {
        resultado.atual = 0;
    }
    if (op === "calcular") {
        resultado.operação = "";
        resultado.atual = "";
    } else {
        resultado.operação = op;
        resultado.atual = "";
    }

    if (resultado.anterior) {
        atualizarTela(op);
    }
}

limpar = () => {
    resultado.atual = "";
    atualizarTela("limpar");
}
limparTudo = () => {
    resultado.atual = "";
    resultado.anterior = "";
    resultado.operação = "";
    atualizarTela("limparTudo");
}

calcular = () => {
    resultado.atual ? resultado.atual = Number(resultado.atual) : resultado.atual = 0;

    resultado.anterior ? resultado.anterior = Number(resultado.anterior) : resultado.anterior = 0;

    switch(resultado.operação) {
        case "+":
            resultado.anterior += resultado.atual;
            break;

        case "-":
            resultado.anterior -= resultado.atual;
            break;

        case "&#215":
            resultado.anterior *= resultado.atual;
            break;

        case "&#247":
            resultado.anterior /= resultado.atual;
            break;
    }

    resultado.atual = "";
}

/*
var res;
var resAnterior;
var resAnteriorTxt;

function atualizarTela(operacao) {
    var resTxt = document.getElementById("resultado");
    var txtAux;

    switch (operacao) {
        case "somar":
            resAnteriorTxt = `${resAnterior} + `;
            txtAux = `${resAnteriorTxt}`;
            break;

        case "subtrair":
            resAnteriorTxt = `${resAnterior} - `;
            txtAux = `${resAnteriorTxt}`;
            break;

        case "multiplicar":
            resAnteriorTxt = `${resAnterior} &#215 `;
            txtAux = `${resAnteriorTxt}`;
            break;

        case "dividir":
            resAnteriorTxt = `${resAnterior} &#247 `;
            txtAux = `${resAnteriorTxt}`;
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
            if (resAnterior) {
                txtAux = `${resAnteriorTxt}${res}`;
            } else {
                txtAux = `${res}`;
            }
            break;
    }
    resTxt.innerHTML = `<p>${txtAux}</p>`;
}

var numero = (n) => {
    if (n == -1) {
        if (res !== undefined) {
            if (String(res).indexOf(",") === -1) {
                res += ",";
            }
        } else {
            res = "0,";
        }
    } else {
        if (res == 0 && n == 0) {
            res = 0;
        } else {
            if (res) {
                res == 0 ? res = String(n) : res += String(n);
            }
            else {
                res = String(n);
            }
        }
    }
    atualizarTela(null);
}

function limpar() {
    res = 0;
    atualizarTela("limpar");
}

function limparTudo() {
    res = 0;
    resAnterior = 0;
    resAnteriorTxt = undefined;
    atualizarTela("limparTudo");
}

function operação(op) {
    if (!res) {
        res = Number(0);
    } else {
        var v = res.indexOf(",");
        if (v === -1) {
            res = String(res).replace(",", ".");
        }
        res = Number(res);
    }
    if (!resAnterior) {
        resAnterior = Number(0);
    } else {
        resAnterior = Number(resAnterior);
    }
    var v = resAnteriorTxt;
    var soma, subtração, multiplicação, divisão;
    (function() {
        v ? soma = v.indexOf("+") : soma = -1,
        v ? subtração = v.indexOf("-") : subtração = -1,
        v ? multiplicação = v.indexOf("&#215") : multiplicação = -1,
        v ? divisão = v.indexOf("&#247") : divisão = -1
        })();
    
    alert(`op: ${op}`);
    res = Number(res);
    resAnterior = Number(resAnterior);
    switch (op) {
        case "somar":
            if (soma != -1) {
                //significa que há uma soma anterior a ser feita
                resAnterior += res;
                res = 0;

                /*
                if (resAnterior) {
                    resAnterior += res;
                } else {
                    resAnterior = res;
                }
                res = 0;
                
            } else {

            }
            atualizarTela(op);
            break;

        case "subtrair":
            if (subtração != -1) {
                if (resAnterior) {
                    resAnterior -= res;
                } else {
                    resAnterior = res;
                }
                res = 0;
            }
            atualizarTela(op);
            break;

        case "multiplicar":
            if (multiplicação != -1) {
                if (resAnterior) {
                    resAnterior *= res;
                } else {
                    resAnterior = res;
                }
                res = 0;
            }
            atualizarTela(op);
            break;

        case "dividir":
            if (divisão != -1) {
                if (resAnterior) {
                    resAnterior /= res;
                } else {
                    resAnterior = res;
                }
                res = 0;
            }
            atualizarTela(op);
            break;
    }
}

function somar() {
    operacao();
}

function subtrair() {
    operacao();
    
    if (resAnterior) {
        resAnterior -= res;
    } else {
        resAnterior = res;
    }
    res = 0;

    atualizarTela("subtrair");
}

function multiplicar() {
    operacao();

    
    if (resAnterior) {
        resAnterior *= res;
    } else {
        resAnterior = res;
    }
    res = 0;

    atualizarTela("multiplicar");
}

function dividir() {
    operacao();

    
    if (resAnterior) {
        resAnterior /= res;
    } else {
        resAnterior = res;
    }
    res = 0;

    atualizarTela("dividir");
}

function calcular() {
    res = Number(res);
    resAnterior = Number(resAnterior);
    
    if (resAnterior) {
        resAnterior += res;
    } else {
        resAnterior = res;
    }
    res = 0;

    atualizarTela("somar");
}


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