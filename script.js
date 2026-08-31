let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    const totalElemento = document.getElementById('total-price');
    const contador = document.getElementById('cart-count');

    lista.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });

    totalElemento.textContent = total.toFixed(2);
    contador.textContent = carrinho.length;
}