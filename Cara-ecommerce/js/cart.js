function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#cart tbody');

    if (cartTableBody) {
        cartTableBody.innerHTML = ''; // Clear existing rows

        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><a href="#" onclick="removeFromCart(${item.id})"><i class="fa-regular fa-circle-xmark"></i></a></td>
                <td><img src="${item.mainImage}" alt="${item.name}" /></td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)" /></td>
                <td>$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
            `;
            cartTableBody.appendChild(row);
        });
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems(); // Reload cart items
}

function updateQuantity(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems(); // Reload cart items
    }
}

// Load cart items when the page is loaded
window.onload = loadCartItems;