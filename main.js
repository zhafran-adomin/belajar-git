const daftarKata = [
    'welcome! to my portfolio',
    "i'm a web developer.",
    "i'm a student."
];

let kataIndeks = 0; 
let hurufIndeks = 0; 
let text = '';
let sedangMenghapus = false;
let counterDelay = 0; 

const papperEl = document.getElementById('papper');

const typingEffect = setInterval(() => {
    const kataSekarang = daftarKata[kataIndeks];

    if (!sedangMenghapus) {

        if (hurufIndeks < kataSekarang.length) {
            text += kataSekarang[hurufIndeks];
            papperEl.innerHTML = text;
            hurufIndeks++;
        } else {
           
            counterDelay++;
            

            if (counterDelay >= 10) { 
                sedangMenghapus = true;
                counterDelay = 0; 
            }
        }
    } else {
     
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


