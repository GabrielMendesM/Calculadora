import React from 'react';
import '../App.css';

export default function Botão(props) {
    const btn_value = props.texto;
    let alerta = "";
    
    switch(btn_value) {
        case "CE":
            alerta = "limpar";
            break;

        case "C":
            alerta = "limpar tudo";
            break;

        case "1":
            alerta = "1";
            break;

        case "2":
            alerta = "2";

            break;

        case "3":
            alerta = "3";
            break;

        case "4":
            alerta = "4";
            break;

        case "5":
            alerta = "5";
            break;

        case "6":
            alerta = "6";
            break;
        
        case "7":
            alerta = "7";
            break;

        case "8":
            alerta = "8";
            break;

        case "9":
            alerta = "9";
            break;

        case "0":
            alerta = "0";
            break;

        case ",":
            alerta = ",";
            break;
        
        case "+":
            alerta = "+";
            break;

        case "-":
            alerta = "-";
            break;

        case "*":
            alerta = "*";
            break;

        case "/":
            alerta = "/";
            break;
    }

    return (
        <input className="botão" type="button" value={btn_value} onClick={()=>alert(`Alerta: ${alerta}`)}/>
    );
}