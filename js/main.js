// 1. Daftar keahlian (halaman Beranda)
const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
];

skills.push({ nama: "JavaScript", level: "Dasar" });
const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkill.appendChild(item);
  });
  jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

const hobi = ["Membaca buku", "Berenang", "Bermain Game2", "Bersepeda"];
for (const item of hobi) {
  console.log(`Hobi saya: ${item}`);
}
console.log(`jumlah hobi: ${hobi.length}`);

const tombolSuka = document.querySelector("#tombol-suka");
const jumlahSuka = document.querySelector("#jumlah-suka");
let suka = 0;
if (tombolSuka && jumlahSuka) {
  tombolSuka.addEventListener("click", () => {
    suka += 1;
    jumlahSuka.textContent = `Disukai ${suka} kali.`;
  });
}

const kotakNama = document.querySelector("#nama");
const sapaan = document.querySelector("#sapaan");
if (kotakNama && sapaan) {
  kotakNama.addEventListener("input", () => {
    sapaan.textContent = `Halo, ${kotakNama.value}!`;
  });
}

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
const perbaruiHitungKarakter = () => {
  hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
};
kotakPesan.addEventListener("input", perbaruiHitungKarakter);
perbaruiHitungKarakter();
}

// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
{
  judul: "Halaman Profil Pertama",
  kategori: "HTML",
  gambar: "img/Halaman.png.png",
  alt: "Tangkapan layar halaman portofolio Azriel",
  deskripsi: "Halaman web pertama saya, berisi profil, hobi, dan cita-cita.",
},
{
  judul: "Form Kontak",
  kategori: "HTML",
  gambar: "img/proyek-kontak.png",
  alt: "Tangkapan layar form kontak",
  deskripsi: "Form kontak dengan label dan validasi isian wajib.",
},
{
  judul: "Tabel Jadwal Belajar",
  kategori: "HTML",
  gambar: "img/proyek-jadwal.png",
  alt: "Tangkapan layar tabel jadwal belajar mandiri",
  deskripsi: "Jadwal belajar mingguan yang disusun dengan thead dan tbody.",
},
{
  judul: "Portofolio Responsif",
  kategori: "CSS",
  gambar: "img/Portofolio.png.png",
  alt: "Tangkapan layar portofolio responsif",
  deskripsi: "Tampilan portofolio yang menyesuaikan ponsel, tablet, dan laptop.",
},
{
  judul: "Kalkulator Nilai Rapor",
  kategori: "JavaScript",
  gambar: "img/kalkulator.png.png",
  alt: "Tangkapan layar hasil latihan kalkulator nilai",
  deskripsi: "Menghitung rata-rata nilai dan menentukan predikat dengan JavaScript.",
},
{
  judul: "Lima Soal Logika",
  kategori: "JavaScript",
  gambar: "img/logika.png.jpeg",
  alt: "Tangkapan layar hasil pengujian lima soal logika",
  deskripsi: "Lima fungsi logika yang masing-masing diuji dengan tiga masukan.",
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
  const filterAktif = document.querySelector(".tombol-filter.aktif");
  if (filterAktif) {
    filterAktif.classList.remove("aktif");
    filterAktif.setAttribute("aria-pressed", "false");
  }

  tombol.classList.add("aktif");
  tombol.setAttribute("aria-pressed", "true");

  const proyekTerpilih =
    kategori === "Semua"
      ? proyek
      : proyek.filter((item) => item.kategori === kategori);
  tampilkanProyek(proyekTerpilih);
});
}

if (daftarProyek && jumlahProyek) {
tampilkanProyek(proyek);
pasangFilter("#filter-semua", "Semua");
pasangFilter("#filter-html", "HTML");
pasangFilter("#filter-css", "CSS");
pasangFilter("#filter-javascript", "JavaScript");
}