let listaDeAmigos = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo').value;
  if (nome === '') {
    alert('Por favor digite o nome de um amigo!');
  } else {
    listaDeAmigos.push(nome);
    limparCampo();
    atualizarListaDeAmigos(listaDeAmigos);
  }
}

function limparCampo() {
  let limparNome = document.getElementById('amigo');
  limparNome.value = '';
}


function atualizarListaDeAmigos(amigos) {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach(amigo => {
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  
  if (listaDeAmigos.length < 2) {
    document.getElementById('resultado').innerHTML = 'Que tal colocar amigos para sortear?';
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[indiceAleatorio];

  document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

document.getElementById('resultado').innerHTML = '';