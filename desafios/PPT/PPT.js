function sorteioResultado() {
    let lista = ["Pedra", "Papel", "Tesoura"];
    let aleatorio = Math.floor(Math.random() * lista.length);
    let escolhido = lista[aleatorio];
    return escolhido;
}


function pedra() {
    var resultMsgPositivo = "Você ganhou!"
    var resultMsgNegativo = "Você perdeu!"
    var resultMsgEmpate = "Empate!"
    var resultado = sorteioResultado().toLowerCase();
    var computerMsg = "O computador escolheu " + resultado + ". ";
    var msgFinal = ""; 

    if (resultado == "pedra") {
        msgFinal = computerMsg + resultMsgEmpate;
    } else if (resultado == "papel") {
        msgFinal = computerMsg + resultMsgNegativo;
    } else {
        msgFinal = computerMsg + resultMsgPositivo;
    }
    
    document.getElementById("resultado").innerHTML = msgFinal.fontsize(4);
}

function  papel() {
    var resultMsgPositivo = "Você ganhou!"
    var resultMsgNegativo = "Você perdeu!"
    var resultMsgEmpate = "Empate!"
    var resultado = sorteioResultado().toLowerCase();
    var computerMsg = "O computador escolheu " + resultado + ". ";
    var msgFinal = ""; 

    if (resultado == "pedra") {
        msgFinal = computerMsg + resultMsgPositivo;
    } else if (resultado == "papel") {
        msgFinal = computerMsg + resultMsgEmpate;
    } else {
        msgFinal = computerMsg + resultMsgNegativo;
    }
    
    document.getElementById("resultado").innerHTML = msgFinal.fontsize(4);}

function tesoura() {
    var resultMsgPositivo = "Você ganhou!"
    var resultMsgNegativo = "Você perdeu!"
    var resultMsgEmpate = "Empate!"
    var resultado = sorteioResultado().toLowerCase();
    var computerMsg = "O computador escolheu " + resultado + ". ";
    var msgFinal = ""; 

    if (resultado == "pedra") {
        msgFinal = computerMsg + resultMsgNegativo;
    } else if (resultado == "papel") {
        msgFinal = computerMsg + resultMsgPositivo;
    } else {
        msgFinal = computerMsg + resultMsgEmpate;
    }
    
    document.getElementById("resultado").innerHTML = msgFinal.fontsize(4);}