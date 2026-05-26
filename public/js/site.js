async function loadSiteData() {
    try {
        const res = await fetch('/api/data');
        const data = await res.json();

        document.getElementById('hero-title').textContent = data.heroTitle;
        document.getElementById('hero-text').textContent = data.heroText;
        document.getElementById('hero-button').textContent = data.heroButton;
        const heroImg = document.getElementById('hero-img');
        heroImg.src = data.heroImage;
        heroImg.alt = data.heroTitle;

        document.getElementById('featured-title').textContent = data.featuredTitle;
        const menuItems = document.querySelectorAll('.menu a');
        menuItems.forEach((item, index) => {
            item.textContent = data.menu[index] || item.textContent;
        });

        document.getElementById('cart-text').textContent = data.cartText;
        document.getElementById('footer-text').textContent = data.footerText;

        data.products.forEach((product, index) => {
            const card = document.getElementById(`product-${index + 1}`);
            if (!card) return;
            card.querySelector('.product-image').src = product.image;
            card.querySelector('.product-image').alt = product.alt;
            card.querySelector('.product-title').textContent = product.title;
            card.querySelector('.product-price').textContent = product.price;
        });
    } catch (error) {
        console.error('Gagal memuat data situs:', error);
    }
}

loadSiteData();
