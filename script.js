// Hello World - Project Pekan 9
// Script JavaScript untuk menampilkan pesan Hello World

// Fungsi utama untuk menampilkan Hello World
function sayHello() {
    console.log("Hello, World!");
    console.log("Project Pekan 9 - Hello World berhasil dijalankan!");
}

// Menampilkan waktu saat halaman dimuat
function showCurrentTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = now.toLocaleDateString('id-ID', options);
    
    const messageEl = document.getElementById('message');
    if (messageEl) {
        messageEl.textContent = `Selamat datang! Hari ini: ${timeString}`;
    }
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    sayHello();
    showCurrentTime();
    
    // Tambahkan interaktivitas - klik heading untuk mengubah warna
    const heading = document.getElementById('greeting');
    if (heading) {
        heading.addEventListener('click', function() {
            const colors = [
                'linear-gradient(90deg, #f093fb, #f5576c, #4facfe)',
                'linear-gradient(90deg, #43e97b, #38f9d7)',
                'linear-gradient(90deg, #fa709a, #fee140)',
                'linear-gradient(90deg, #a18cd1, #fbc2eb)',
                'linear-gradient(90deg, #ffecd2, #fcb69f)'
            ];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            heading.style.background = randomColor;
            heading.style.webkitBackgroundClip = 'text';
            heading.style.backgroundClip = 'text';
            console.log("Warna heading berubah!");
        });
    }
});
