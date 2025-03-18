// Lista de amigos vazia
let amigos = [];

// Função para adicionar amigo na lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if(amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo} já está na lista, por favor, insira outro nome`);
        return;
    }

    // Inserir alerta caso o campo esteja vazio
    if (nomeAmigo == "") {
        alert("Campo vazio, por favor, insira um nome");
    } else { // Adicionando nome na lista de amigos
        amigos.push(nomeAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}
// funcão para atualizar a lista de amigos
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = amigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}
// funcão para sortear amigo e também impedir que a pessoa tire seu proprio nome
function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Por favor, insira um nome.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

}  