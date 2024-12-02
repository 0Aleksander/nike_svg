document.addEventListener('DOMContentLoaded', () => {
    // Interactive Cart Button (just a simple alert for demo purposes)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});
