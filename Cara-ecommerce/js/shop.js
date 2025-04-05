document.addEventListener('DOMContentLoaded', function() {
    loadProducts(1);

    const paginationButtons = document.querySelectorAll('.pagination-btn');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (!this.classList.contains('active')) {
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const pageNumber = parseInt(this.getAttribute('data-page'));
                loadProductsWithAnimation(pageNumber);
            }
        });
    });
});

function loadProducts(pageNumber) {
    const productsPerPage = 8;
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);
    
    const container = document.querySelector('.pro-container');
    container.innerHTML = '';
    
    pageProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'pro';
        productElement.style.animationDelay = `${index * 0.05}s`;
        productElement.innerHTML = `
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
        
        productElement.addEventListener('click', function() {
            window.location.href = `sproduct.html?id=${product.id}`;
        });
        
        container.appendChild(productElement);
    });
}

function loadProductsWithAnimation(pageNumber) {
    const container = document.querySelector('.pro-container');
    container.classList.add('loading');

    setTimeout(() => {
        loadProducts(pageNumber);
        requestAnimationFrame(() => {
            container.classList.remove('loading');
        });
    }, 300);
}