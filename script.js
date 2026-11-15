
// Butona tıklandığında çalışacak fonksiyon
function showMessage() {
    alert("Tebrikler! JavaScript başarıyla çalışıyor! 🎉");
}

// Sayaç başlangıç değeri
let count = 0;

// Sayaç butonuna basıldığında çalışır
function increaseCounter() {
    count++;

    // Ekrandaki sayıyı güncelle
    document.getElementById("count").textContent = count;
}

// Sayacı sıfırla
function resetCounter() {
    count = 0;

    // Ekrandaki sayıyı sıfırla
    document.getElementById("count").textContent = count;
}

// Dijital saati güncelle
function updateClock() {
    const now = new Date();

    const currentTime = now.toLocaleTimeString("tr-TR");

    document.getElementById("clock").textContent = currentTime;
}

// İlk açılışta saati göster
updateClock();

// Her saniye saati yenile
setInterval(updateClock, 1000);

// Açık ve koyu tema arasında geçiş yap
function toggleTheme() {
    document.body.classList.toggle("light-theme");
}

// İletişim formunu işle
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(
        "Mesajın alındı! 🎉\n\n" +
        "Ad: " + name + "\n" +
        "E-posta: " + email + "\n" +
        "Mesaj: " + message
    );

    document.getElementById("contactForm").reset();
}
