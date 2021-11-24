var contaAtual = null;
var resultado = null;

var contas = [];
var idConta = 0;

var últimaOp = "";

const atualizarTela = () => {
    let atualTxt = document.getElementById("conta-atual");
    let resTxt = document.getElementById("res");

    if (contas.length > 1) {
        contaAtual = "";
        for (i = 0; i < contas.length; i++) {
            contaAtual += contas[i];
        }
    } else if (contas[idConta]) {
        contaAtual = contas[idConta];
    }

    if (resultado !== null) {
        resTxt.innerHTML = resultado;        
    }

    atualTxt.innerHTML = contaAtual;
}

const limpar = (tudo) => {
    if (tudo) {
        contaAtual = null;
        resultado = null;
        contas = [];
        idConta = 0;
    } else {

    }
    atualizarTela();
}

const entrarNum = (num) => {
    if (contas[idConta]) {
        contas[idConta] += String(num);
    } else {
        contas[idConta] = String(num);
    }
    últimaOp = "num";
    atualizarTela();
}

const entrarOper = (op) => {
    switch (op) {
        case "*":
            op = "&#215";
            break;
        
        case "/":
            op = "&#247";
            break;

        case "=":
            //alert("Fazer a conta, colocar no resultado e apagar");

            let resAux;

            if (contas.length > 0) {
                if (contas.length === 1) {
                    resAux = contas[0]; 
                } else {
                    alert("Fazer a conta");
                }
            } else {
                resAux = 0;
            }
            limpar(true);
            resultado = resAux;
            atualizarTela();
            break;
    }

    if (contas[idConta]) {
        if (op === "=") {
            for (i = 0; i < contas.length; i++) {
                alert(contas[i]);
            }
        } else if (últimaOp !== "op") {
            contas[idConta] += ` ${op} `;
            atualizarTela();
            idConta++;
        }
    } else {
    
    }
    últimaOp = "op";
}
