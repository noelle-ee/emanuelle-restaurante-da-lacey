let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartList.innerHTML = '';
    cart.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.item} - R$ ${entry.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}
