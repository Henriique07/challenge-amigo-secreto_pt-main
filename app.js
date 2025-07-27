let amigos = [];

function adicionarAmigo(){
    let nomeAmigos= document.querySelector('input').value;
    console.log(nomeAmigos);

    if (nomeAmigos == ""){
        //console.log ('Por favor, insira um nome.');
        alert ('Por favor, insira um nome.');
    }else {
        amigos.push(nomeAmigos);
        console.log(amigos);
        limparCampo();
        return nomeAmigos;
    }
    
}
   for (let i=0;i<amigos.length;i++){
        const item = document.createElement('li');
        item.textContent = amigos[i];
        nomeAmigos.appenchild(item);
    }

function sortearAmigo(){
    
 }

function limparCampo() {
    nomeAmigos = document.querySelector('input');
    nomeAmigos.value = '';
}