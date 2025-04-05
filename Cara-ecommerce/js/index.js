document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    loadNewArrivals();
    setupProductClickEvents();
});

function loadFeaturedProducts() {
    const featuredProducts = products.slice(0, 8); 
    const container = document.querySelector('#product1 .pro-container');
    if (container) {
        populateProductContainer(container, featuredProducts);
    }
}

function loadNewArrivals() {
    const newArrivals = products.slice(8, 16); 
    const container = document.querySelectorAll('#product1 .pro-container')[1];
    if (container) {
        populateProductContainer(container, newArrivals);
    }
}

function populateProductContainer(container, productList) {
    container.innerHTML = ''; 
    productList.forEach(product => {
        const productDiv = createProductElement(product);
        container.appendChild(productDiv);
    });
}

function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'pro';
    productDiv.innerHTML = `
        <img src="${product.mainImage}" alt="${product.name}">
        <div class="des">
            <span>adidas</span>
            <h5>${product.name}</h5>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h4>${product.price}</h4>
        </div>
        <a href="#" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>
    `;
    productDiv.setAttribute('data-product-id', product.id);
    return productDiv;
}

function setupProductClickEvents() {
    const productContainers = document.querySelectorAll('#product1 .pro-container');
    productContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            const productDiv = e.target.closest('.pro');
            if (productDiv) {
                const productId = productDiv.getAttribute('data-product-id');
                if (productId) {
                    window.location.href = `sub-pages/sproduct.html?id=${productId}`;
                }
            }
        });
    });
}