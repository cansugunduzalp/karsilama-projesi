// Giriş yap butonuna tıklanınca çalışacak fonksiyon
function girisYap() {
    const isim = document.getElementById("isimInput").value;
  
    // Eğer isim boşsa uyarı ver
    if (isim.trim() === "") {
      alert("Lütfen isminizi giriniz.");
      return;
    }
  
    // Giriş ekranını gizle, karşılama ekranını göster
    document.getElementById("girisEkrani").style.display = "none";
    document.getElementById("karsilamaEkrani").style.display = "block";
  
    // Hoş geldin mesajı yaz
    document.getElementById("hosgeldinMesaji").textContent = `Hoş geldin, ${isim}!`;
  
    // Saat ve günü hemen göster
    zamanGuncelle();
  
    // Her saniyede bir güncelle
    setInterval(zamanGuncelle, 1000);
  }
  
  // Zamanı ve günü gösteren fonksiyon
  function zamanGuncelle() {
    const simdi = new Date();
  
    const saat = simdi.toLocaleTimeString("tr-TR"); // Örn: 14:23:05
  
    const gunler = [
      "Pazar", "Pazartesi", "Salı", "Çarşamba",
      "Perşembe", "Cuma", "Cumartesi"
    ];
    const gun = gunler[simdi.getDay()];
  
    document.getElementById("saat").textContent = `Saat: ${saat}`;
    document.getElementById("gun").textContent = `Gün: ${gun}`;
  }
  