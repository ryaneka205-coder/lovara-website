function addToCart(product) {
    alert(`Produk "${product}" telah ditambahkan ke keranjang! (Fitur keranjang belum diimplementasi sepenuhnya.)`);
}

// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});