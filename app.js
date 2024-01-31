/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
*/

let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}.` 
        exibirTextoNaTela('h1', 'ACERTOU !!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela ('p', 'O numero secreto é menor.');
            
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior.');
            
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidaddeDeElementoNaLista = listaDeNumeroSorteado.length;
    if (quantidaddeDeElementoNaLista == numeroLimite){
        listaDeNumeroSorteado = [];
    }
    if (listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
    
}

function reiniciarJogo() {
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}