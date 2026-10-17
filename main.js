const daftarKata = [
    'welcome! to my portfolio',
    'web developer.',
    'student ',
    'ADOmin'
];

let kataIndeks = 0; 
let hurufIndeks = 0; 
let text = '';
let sedangMenghapus = false;
let counterDelay = 0; // 1. Variabel baru untuk menghitung waktu jeda

const papperEl = document.getElementById('papper');

const typingEffect = setInterval(() => {
    const kataSekarang = daftarKata[kataIndeks];

    if (!sedangMenghapus) {
        // --- PROSES MENGETIK ---
        if (hurufIndeks < kataSekarang.length) {
            text += kataSekarang[hurufIndeks];
            papperEl.innerHTML = text;
            hurufIndeks++;
        } else {
            // 2. Ketika selesai mengetik, jalankan delay di sini sebelum menghapus
            counterDelay++;
            
            // Angka 10 artinya menunggu 10 x 100ms = 1000ms (1 detik)
            if (counterDelay >= 10) { 
                sedangMenghapus = true;
                counterDelay = 0; // Reset counter untuk penggunaan berikutnya
            }
        }
    } else {
        // --- PROSES MENGHAPUS ---
        if (text.length > 0) {
            text = text.slice(0, -1);
            papperEl.innerHTML = text === "" ? "&nbsp;" : text;
        } else {
            sedangMenghapus = false;
            hurufIndeks = 0;
            kataIndeks = (kataIndeks + 1) % daftarKata.length;
        }
    }
}, 100);
