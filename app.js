let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let input = document.querySelector('input');

function adicionarAmigo(){
    let nomeAmigo = input.value.trim();

    if (amigos.includes(nomeAmigo)){
        alert('Este amigo ja foi adicionado');
        return;
    }

    if (nomeAmigo == ""){
        //console.log ('Por favor, insira um nome.');
        alert ('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    limparCampo();
    atualizarLista();
    return nomeAmigo;
}

function atualizarLista(){
    listaAmigos.innerHTML = '';

    for (let i=0;i<amigos.length;i++){
        const item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert ('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteadao = amigos[indiceSorteado];

    atualizarLista();
    listaAmigos.children[indiceSorteado].classList.add('amigo-sorteado');

    alert(`Amigo sorteado: ${amigoSorteadao}`);
}

function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}