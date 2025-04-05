const products = [
    {
        id: 1,
        name: "Cartoon Astronaut T-Shirts",
        price: "$78.00",
        description: "This stylish men's fashion t-shirt boasts a modern and sleek design, perfect for the contemporary urban wardrobe. The unique graphic print on the front adds an eye-catching element to elevate any casual outfit.",
        mainImage: "../assets/products/f1.jpg",
        smallImages: [
            "../assets/products/f1.jpg",
            "../assets/products/f2.jpg",
            "../assets/products/f3.jpg",
            "../assets/products/f4.jpg"
        ]
    },
    {
        id: 2,
        name: "Floral Print Shirt",
        price: "$78.00",
        description: "A vibrant floral print shirt that brings a touch of nature to your wardrobe. Perfect for casual outings or as a stylish beach cover-up.",
        mainImage: "../assets/products/f2.jpg",
        smallImages: [
            "../assets/products/f2.jpg",
            "../assets/products/f3.jpg",
            "../assets/products/f4.jpg",
            "../assets/products/f5.jpg"
        ]
    },
    {
        id: 3,
        name: "Floral Pattern Shirt",
        price: "$78.00",
        description: "A classic shirt with a modern floral pattern, perfect for both casual and semi-formal occasions.",
        mainImage: "../assets/products/f3.jpg",
        smallImages: [
            "../assets/products/f3.jpg",
            "../assets/products/f4.jpg",
            "../assets/products/f5.jpg",
            "../assets/products/f6.jpg"
        ]
    },
    {
        id: 4,
        name: "Floral Design Shirt",
        price: "$78.00",
        description: "An eye-catching shirt with a unique floral design, sure to make a statement wherever you go.",
        mainImage: "../assets/products/f4.jpg",
        smallImages: [
            "../assets/products/f4.jpg",
            "../assets/products/f5.jpg",
            "../assets/products/f6.jpg",
            "../assets/products/f7.jpg"
        ]
    },
    {
        id: 5,
        name: "Tropical Print Shirt",
        price: "$78.00",
        description: "A cool and comfortable shirt with a tropical print, perfect for summer days and beach vacations.",
        mainImage: "../assets/products/f5.jpg",
        smallImages: [
            "../assets/products/f5.jpg",
            "../assets/products/f6.jpg",
            "../assets/products/f7.jpg",
            "../assets/products/f8.jpg"
        ]
    },
    {
        id: 6,
        name: "Vintage Pattern Jacket",
        price: "$90.00",
        description: "A stylish jacket with a vintage pattern, adding a touch of retro charm to your outfit.",
        mainImage: "../assets/products/f6.jpg",
        smallImages: [
            "../assets/products/f6.jpg",
            "../assets/products/f7.jpg",
            "../assets/products/f8.jpg",
            "../assets/products/n1.jpg"
        ]
    },
    {
        id: 7,
        name: "Floral Pants",
        price: "$89.00",
        description: "Comfortable and stylish pants with a floral pattern, perfect for a casual day out.",
        mainImage: "../assets/products/f7.jpg",
        smallImages: [
            "../assets/products/f7.jpg",
            "../assets/products/f8.jpg",
            "../assets/products/n1.jpg",
            "../assets/products/n2.jpg"
        ]
    },
    {
        id: 8,
        name: "Floral Top",
        price: "$92.00",
        description: "A beautiful floral top that combines comfort with style, suitable for various occasions.",
        mainImage: "../assets/products/f8.jpg",
        smallImages: [
            "../assets/products/f8.jpg",
            "../assets/products/n1.jpg",
            "../assets/products/n2.jpg",
            "../assets/products/n3.jpg"
        ]
    },
    {
        id: 9,
        name: "Casual Blue Shirt",
        price: "$68.00",
        description: "A comfortable and stylish casual blue shirt, perfect for everyday wear.",
        mainImage: "../assets/products/n1.jpg",
        smallImages: [
            "../assets/products/n1.jpg",
            "../assets/products/n2.jpg",
            "../assets/products/n3.jpg",
            "../assets/products/n4.jpg"
        ]
    },
    {
        id: 10,
        name: "Gray Casual Shirt",
        price: "$68.00",
        description: "A versatile gray casual shirt that can be dressed up or down for various occasions.",
        mainImage: "../assets/products/n2.jpg",
        smallImages: [
            "../assets/products/n2.jpg",
            "../assets/products/n3.jpg",
            "../assets/products/n4.jpg",
            "../assets/products/n5.jpg"
        ]
    },
    {
        id: 11,
        name: "White Casual Shirt",
        price: "$68.00",
        description: "A classic white casual shirt, a must-have in every wardrobe for its versatility.",
        mainImage: "../assets/products/n3.jpg",
        smallImages: [
            "../assets/products/n3.jpg",
            "../assets/products/n4.jpg",
            "../assets/products/n5.jpg",
            "../assets/products/n6.jpg"
        ]
    },
    {
        id: 12,
        name: "Casual Check Shirt",
        price: "$70.00",
        description: "A trendy casual check shirt, perfect for a smart-casual look.",
        mainImage: "../assets/products/n4.jpg",
        smallImages: [
            "../assets/products/n4.jpg",
            "../assets/products/n5.jpg",
            "../assets/products/n6.jpg",
            "../assets/products/n7.jpg"
        ]
    },
    {
        id: 13,
        name: "Blue Denim Shirt",
        price: "$85.00",
        description: "A stylish blue denim shirt that never goes out of fashion.",
        mainImage: "../assets/products/n5.jpg",
        smallImages: [
            "../assets/products/n5.jpg",
            "../assets/products/n6.jpg",
            "../assets/products/n7.jpg",
            "../assets/products/n8.jpg"
        ]
    },
    {
        id: 14,
        name: "Casual Short Pants",
        price: "$58.00",
        description: "Comfortable and stylish casual short pants, perfect for warm weather.",
        mainImage: "../assets/products/n6.jpg",
        smallImages: [
            "../assets/products/n6.jpg",
            "../assets/products/n7.jpg",
            "../assets/products/n8.jpg",
            "../assets/products/f1.jpg"
        ]
    },
    {
        id: 15,
        name: "Brown Casual Shirt",
        price: "$82.00",
        description: "A sophisticated brown casual shirt that adds warmth to your outfit.",
        mainImage: "../assets/products/n7.jpg",
        smallImages: [
            "../assets/products/n7.jpg",
            "../assets/products/n8.jpg",
            "../assets/products/f1.jpg",
            "../assets/products/f2.jpg"
        ]
    },
    {
        id: 16,
        name: "Casual Black Shirt",
        price: "$70.00",
        description: "A sleek casual black shirt, perfect for evening outings or a smart-casual look.",
        mainImage: "../assets/products/n8.jpg",
        smallImages: [
            "../assets/products/n8.jpg",
            "../assets/products/f1.jpg",
            "../assets/products/f2.jpg",
            "../assets/products/f3.jpg"
        ]
    }
];

let currentProductId;

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    currentProductId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === currentProductId);

    if (product) {
        updateProductInfo(product);
        setupSmallImageListeners();
    }
}

function updateProductInfo(product) {
    document.getElementById('mainImg').src = product.mainImage;
    document.getElementById('mainImg').alt = product.name;
    
    const smallImgs = document.getElementsByClassName('small-img');
    for (let i = 0; i < smallImgs.length && i < product.smallImages.length; i++) {
        smallImgs[i].src = product.smallImages[i];
        smallImgs[i].alt = product.name;
        smallImgs[i].dataset.index = i;
    }

    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDescription').textContent = product.description;
}

function setupSmallImageListeners() {
    const smallImgs = document.getElementsByClassName('small-img');
    for (let i = 0; i < smallImgs.length; i++) {
        smallImgs[i].addEventListener('click', function() {
            const clickedIndex = parseInt(this.dataset.index);
            const currentProduct = products.find(p => p.id === currentProductId);
            
            if (currentProduct && clickedIndex < currentProduct.smallImages.length) {
                document.getElementById('mainImg').src = currentProduct.smallImages[clickedIndex];

                if (clickedIndex !== 0) {
                    const newProductId = (currentProductId - 1 + clickedIndex) % products.length + 1;
                    const newProduct = products.find(p => p.id === newProductId);
                    if (newProduct) {
                        currentProductId = newProductId;
                        updateProductInfo(newProduct);
                    }
                }
            }
        });
    }
}

function loadFeaturedProducts() {
    const featuredProducts = products.slice(0, 4); 
    const container = document.querySelector('#product1 .pro-container');
    
    if (container) {
        container.innerHTML = ''; 
        
        featuredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'pro';
            productDiv.innerHTML = `
                <img src="${product.mainImage}" alt="${product.name}">
                <div class="des">
                    <span>adidas</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${product.price}</h4>
                </div>
                <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
            `;
            productDiv.setAttribute('data-product-id', product.id);
            container.appendChild(productDiv);
        });

        setupFeaturedProductClickEvents();
    }
}

function setupFeaturedProductClickEvents() {
    const productDivs = document.querySelectorAll('#product1 .pro-container .pro');
    productDivs.forEach(div => {
        div.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product-id');
            if (productId) {
                currentProductId = parseInt(productId);
                const product = products.find(p => p.id === currentProductId);
                if (product) {
                    updateProductInfo(product);
                }
            }
        });
    });
}

if (window.location.pathname.includes('sproduct.html')) {
    window.onload = function() {
        loadProductDetails();
        loadFeaturedProducts();
    };
}