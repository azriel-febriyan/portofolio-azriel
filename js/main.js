// JavaScript portofolio Azriel febriyan
// Dipasang di ketiga halaman dengan defer

// 1. Daftar keahlian (halaman Beranda)
const skills = [
  { nama: "HTML dasar (sedang dipelajari)" },
  { nama: "Mengetik cepat" },
  { nama: "Desain poster dengan Canva" },
];

console.log("Keahlian Azriel febriyan:");
console.table(skills);

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = skill.nama;
    daftarSkill.appendChild(item);
  });

  jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

const hobi = ["Bermain futsal", "Bermain basket", "Memancing"];
for (const item of hobi) {
  console.log(`Hobi saya: ${item}`);
}
console.log(`Jumlah hobi: ${hobi.length}`);

// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    tombolTema.textContent = document.body.classList.contains("gelap")
      ? "Mode Terang"
      : "Mode Gelap";
  });
}

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan && hitungKarakter) {
  kotakPesan.addEventListener("input", () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
  });
}

// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    gambar: "azriel.png",
    alt: "Tangkapan layar halaman profil azriel febriyan",
    deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar.",
  },
  {
    judul: "Form Kontak",
    kategori: "HTML",
    gambar: "img/proyek-kontak.png",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
  },
  {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    gambar: "img/proyek-jadwal.png",
    alt: "Tangkapan layar tabel jadwal belajar mandiri",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
  },
  {
    judul: "Portofolio Responsif",
    kategori: "CSS",
    gambar: "img/proyek-responsif.png",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi: "Rapi di ponsel, tablet, dan laptop dengan Flexbox.",
  },
  {
    judul: "Kalkulator Nilai Rapor",
    kategori: "JavaScript",
    gambar: "img/proyek-kalkulator.png",
    alt: "Tangkapan layar hasil kalkulator nilai di Console",
    deskripsi: "Rata-rata dan predikat nilai dengan fungsi JavaScript.",
  },
  {
    judul: "Lima Soal Logika",
    kategori: "JavaScript",
    gambar: "img/proyek-logika.png",
    alt: "Tangkapan layar hasil uji lima soal logika",
    deskripsi: "Lima fungsi logika yang masing-masing diuji 3 masukan.",
  },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
    <article class="kartu">
      <span class="label">${item.kategori}</span>
      <h3>${item.judul}</h3>
      <img src="${item.gambar}" alt="${item.alt}" width="280">
      <p>${item.deskripsi}</p>
    </article>`;
}

function tampilkanProyek(daftar) {
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);

  if (!tombol) {
    return;
  }

  tombol.addEventListener("click", () => {
    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === kategori));
    }

    const tombolAktif = document.querySelector(".tombol-filter.aktif");

    if (tombolAktif) {
      tombolAktif.classList.remove("aktif");
    }

    tombol.classList.add("aktif");
  });
}

if (daftarProyek && jumlahProyek) {
  tampilkanProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "HTML");
  pasangFilter("#filter-css", "CSS");
  pasangFilter("#filter-javascript", "JavaScript");
}
