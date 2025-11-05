
// Main JavaScript untuk CairBPJS.COM
// Modal functionality dan form handling

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contact-modal');
    const form = document.getElementById('submission-form');

    // Global functions untuk modal
    window.openModal = function() {
        modal.classList.add('active');
        document.body.classList.add('overflow-hidden');
        form.style.display = 'block';
    };

    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
        form.reset();
    };

    window.submitForm = function() {
        const nama = document.getElementById('nama').value;
        const alamat = document.getElementById('alamat').value;
        const kendala = document.getElementById('kendala').value;

        // Log data (untuk debugging)
        console.log('--- Data Pengajuan Cepat Terkirim ---');
        console.log('Nama:', nama);
        console.log('Alamat:', alamat);
        console.log('Kendala:', kendala);
        console.log('------------------------------------');

        closeModal();
        
        // Redirect ke WhatsApp
        const waText = `Halo, saya ingin mengajukan pencairan BPJS. Nama: ${nama}. Alamat: ${alamat}. Kendala: ${kendala}`;
        window.location.href = `https://wa.me/6285749519075?text=${encodeURIComponent(waText)}`;
    };

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'contact-modal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Performance optimization - Preload important images
    const importantImages = [
        'assets/img/ico.png'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

console.log('CairBPJS.COM - Website loaded successfully! 🚀');