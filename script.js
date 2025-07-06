const quotes = {
  sad: [
    "Kesedihan bukan akhir, tapi awal kekuatan.",
    "Air mata adalah cara hati bicara.",
    "Setiap badai pasti berlalu.",
    "Terkadang menangis membersihkan jiwa.",
    "Kesedihan bisa menjadi jembatan menuju kebijaksanaan.",
    "Hidup terasa berat, tapi kamu tidak sendiri.",
    "Hari ini boleh rapuh, besok kamu bisa bangkit.",
    "Pelangi selalu datang setelah hujan.",
    "Saat dunia terasa berat, tarik napas dan tenanglah.",
    "Kekuatan sejati tumbuh dari luka.",
  ],
  angry: [
    "Amarah membakar lebih banyak yang dicintai.",
    "Tenangkan diri, jawab dengan damai.",
    "Kendalikan emosi, jangan biarkan emosi mengendalikanmu.",
    "Kedamaian adalah kekuatan tertinggi.",
    "Marah itu manusiawi, tapi bijak itu pilihan.",
    "Tarik napas panjang, buang kemarahan perlahan.",
    "Menyimpan amarah hanya melukai dirimu sendiri.",
    "Dengan sabar, bahkan kemarahan bisa berubah jadi damai.",
    "Marah hanya menyebabkan penyesalan.",
    "Diam sejenak sebelum berkata.",
  ],
  tired: [
    "Istirahat adalah bagian dari perjuangan.",
    "Tubuhmu butuh waktu untuk pulih.",
    "Rehat sejenak, lalu teruskan langkahmu.",
    "Kelelahan tanda kerja keras.",
    "Istirahat sejenak, lalu bangkit lebih kuat.",
    "Lelah hari ini, cerita sukses esok.",
    "Biarkan tubuh dan pikiran beristirahat.",
    "Bergerak pelan tetap lebih baik daripada diam.",
    "Rehat itu investasi untuk produktivitas.",
    "Kekuatan tumbuh di balik kelelahan.",
  ],
  happy: [
    "Berbagi bahagia membuat dunia lebih cerah.",
    "Nikmati momen kecil dalam hidup.",
    "Tertawa adalah obat terbaik.",
    "Senyuman kecil bisa mengubah harimu.",
    "Setiap hari adalah kesempatan baru.",
    "Bagikan kebahagiaanmu ke dunia.",
    "Bahagia dimulai dari dalam dirimu.",
    "Syukuri apa yang kamu punya.",
    "Pikiran positif membuka jalan yang indah.",
    "Hidup bahagia dimulai dengan pikiran positif.",
  ],
};

let currentMood = "";
const quoteEl = document.getElementById("quote");
quoteEl.style.opacity = "1";
const newBtn = document.getElementById("new-quote");
const moodBtns = document.querySelectorAll(".mood-buttons button");

moodBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentMood = btn.dataset.mood;
    showQuote();
  });
});

newBtn.addEventListener("click", () => {
  if (!currentMood) {
    alert("Pilih mood dulu ya!");
    return;
  }
  showQuote();
});

function showQuote() {
  const list = quotes[currentMood];
  const text = list[Math.floor(Math.random() * list.length)];
  quoteEl.textContent = text;
  quoteEl.classList.remove("fade-in");
  quoteEl.style.opacity = "1";
  void quoteEl.offsetWidth;
  quoteEl.classList.add("fade-in");
}
