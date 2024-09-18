let listaNumerosSorteados = [];
let quantidadeTentativas = 10;
let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);

let tentativas = 1;



function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeTentativas + 1);
    return numeroEscolhido;
    
}

function gerarTextoNaTela(tag, texto){
    let campoTexto = document.querySelector(tag);
    campoTexto.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limpaCampo(){
    document.querySelector('input').value = "";
}

function mensagemInicial(){
    gerarTextoNaTela('h1', 'Jogo do número secreto');
    gerarTextoNaTela('p', `Escolha um número entre 1 e ${quantidadeTentativas}`);
}




mensagemInicial()


listaNumerosSorteados.push(numeroSecreto);
console.log(listaNumerosSorteados);
function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
    
    
    
    

    if (chute == numeroSecreto){
        gerarTextoNaTela('h1', 'Acertou');
        gerarTextoNaTela('p', `Parabéns, você acertou o número secreto [${numeroSecreto}] com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        

    }else if (chute > numeroSecreto){
        gerarTextoNaTela('h1', 'Jogo do número secreto');
        gerarTextoNaTela('p', 'O numero secreto é menor');
    }else{
        gerarTextoNaTela('h1', 'Jogo do número secreto');
        gerarTextoNaTela('p', 'O numero secreto é maior');
    }

    tentativas++;
    limpaCampo()
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    if (listaNumerosSorteados.includes(numeroSecreto)){
        reiniciarJogo();
    }else{
        listaNumerosSorteados.push(numeroSecreto);
        console.log(listaNumerosSorteados);
        console.log(numeroSecreto);
        tentativas = 1;
        document.getElementById('reiniciar').setAttribute('disabled', true);
        mensagemInicial()  
    }
    
}

