// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'thankyou.html';
});

// Add to Cart
let cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.getAttribute('data-item');
        const price = this.getAttribute('data-price');
        cart.push({ item, price });
        alert('Added to cart: ' + item);
        updateCart();
    });
});

// Update Cart
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.item} - $${item.price}`;
            cartItems.appendChild(div);
        });
    }
}

// Checkout
function checkout() {
    alert('Checkout - Total: $' + cart.reduce((total, item) => total + parseInt(item.price), 0));
    cart = [];
    updateCart();
}
