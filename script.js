document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. GENERATE BINTANG (Starry Background) ---
    const starsContainer = document.getElementById('stars-container');
    const starCount = 200; // Jumlah bintang

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Posisi random
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        // Durasi kedip random
        const duration = Math.random() * 3 + 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.setProperty('--duration', `${duration}s`);
        
        starsContainer.appendChild(star);
    }

    // --- 2. SCROLL ANIMATION (INTERSECTION OBSERVER) ---
    // Logika animasi masuk dan keluar (Looping)
    
    const observerOptions = {
        threshold: 0.15, // Animasi mulai ketika 15% elemen terlihat
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika elemen masuk layar: Tambah class 'active'
                entry.target.classList.add('active');
            } else {
                // Jika elemen keluar layar: Hapus class 'active'
                // Ini yang membuat animasi terulang saat di-scroll balik
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Targetkan semua elemen yang punya class 'reveal'
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
});