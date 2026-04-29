let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function TextoExibir(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
    TextoExibir('h1', 'Jogo do número secreto');
    TextoExibir('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        TextoExibir('h1', 'Você acertou')
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let tentativasTexto = `Você acertou com ${tentativas} ${palavraTentativas}!` 
        TextoExibir('p', tentativasTexto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        TextoExibir('p', 'O número secreto é menor')
    } else {
        TextoExibir('p', 'O número secreto é maior')
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeLista = numerosSorteados.length;

    if(quantidadeLista == numeroLimite) {
        numerosSorteados = [];
}

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tenativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}