 let numeros = [];

        
function adicionarNumero() {
    const numeroInput = document.getElementById('numeroInput');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
                numeros.push(numero);
                atualizarLista();
                numeroInput.value = ''; 
    } else {
                alert("Por favor, insira um número válido!");
    }
}

        
function atualizarLista() {
    const lista = document.getElementById('listaNumeros');
    lista.innerHTML = ''; 

    numeros.forEach((num, index) => {
        const li = document.createElement('li');
        li.textContent = `Posição ${index + 1}° = ${num}`;
        lista.appendChild(li);
});
}

function sortearNumero() {
    if (numeros.length === 0) {
        alert("Nenhum número foi inserido para sortear.");
        return;
    }

        const indiceSorteado = Math.floor(Math.random() * numeros.length);
        const numeroSorteado = numeros[indiceSorteado];

document.getElementById('resultadoSorteio').textContent = `Resultado do Sorteio: Posição ${indiceSorteado + 1}° : ${numeroSorteado}`;
        }