document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default link
        const targetId = this.getAttribute('href'); // Ambil ID target
        const targetSection = document.querySelector(targetId); // Dapatkan elemen target

        if (targetSection) {
            // Scroll ke section target dengan animasi
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});