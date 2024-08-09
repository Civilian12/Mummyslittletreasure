document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Add event listeners to product buttons
    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('Price: $', ''));

            // Add to cart
            addToCart(productId, productName, productPrice);
            updateCartUI();
        });
    });

    function addToCart(id, name, price) {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
    }

    function updateCartUI() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItemsElement.innerHTML += `
                <li>${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}</li>
            `;
        });

        cartCountElement.textContent = cart.length;
        cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Checkout button (basic example)
    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout functionality is not implemented.');
    });
});


