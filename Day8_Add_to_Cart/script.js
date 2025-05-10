
const products = [
    {
        id: 1,
        img: "images/img1.avif",  
        name: "Jordan Black-Red Shoes",
        price: 45000
    },
    {
        id: 2,
        img: "images/img2.jpg",
        name: "iPhone 14 Pro",
        price: 200000
    },
    {
        id: 3,
        img: "images/img3.jpg",  
        name: "Royal Enfield Bullet",
        price: 300000
    },
    {
        id: 4,
        img: "images/img4.jpg",  
        name: "Pure Pashmina Saree",
        price: 1870
    },
    {
        id: 5,
        img: "images/img5.webp", 
        name: "Philips Smart LED TV",
        price: 100000
    },
    {
        id: 6,
        img: "images/img6.jpg" ,
        name: "Sonata Watch",
        price: 45000
    }
];

const productsDiv = document.getElementById('products');
const cartItemsDiv = document.getElementById('cartItems');
const totalDiv = document.getElementById('total');
const cartBtn = document.getElementById('cart');

let cart = [];
let total = 0;

products.forEach(product => {
    productsDiv.innerHTML += `
        <div class="product">
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>₹${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    total += product.price;
    updateCart();
}

function updateCart() {
    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}" width="50">
            <p>${item.name} - ₹${item.price.toLocaleString()}</p>
        </div>
    `).join('');
    totalDiv.innerText = `Total: ₹${total.toLocaleString()}`;
    cartBtn.innerText = `Cart (${cart.length})`;
}
     
