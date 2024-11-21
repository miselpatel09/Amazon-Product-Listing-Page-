function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    document.getElementById('wishlist-count').textContent = wishlist.length;
}


function showImageModal(productId) {
    const productImage = document.querySelector(`.product[data-id="${productId}"] .product-image img`);
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    modalImage.src = productImage.src;
    modal.style.display = 'flex';
}


function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}


window.onload = function() {
    updateCartCount();
    updateWishlistCount();
};
