let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let input = document.querySelector('input');

function adicionarAmigo(){
    let nomeAmigo = input.value.trim();

    if (nomeAmigo == ""){
        //console.log ('Por favor, insira um nome.');
        alert ('Por favor, insira um nome.');
        return;
    }else {
        amigos.push(nomeAmigo);
        console.log(amigos);
        limparCampo();
        return nomeAmigo;
    }
}

function atualizarLista(){
       for (let i=0;i<amigos.length;i++){
        const item = document.createElement('li');
        item.textContent = amigos[i];
        nomeAmigo.appendChild(item);
    }
}

function sortearAmigo(){

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() *  + 1);
 }

function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}