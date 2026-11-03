// Latihan JavaScript Dasar - Minggu 06
// Kalkulator nilai rapor di Console

// 1. Pesan pertama ke Console
console.log("Halo, saya Azriel!");
console.log("Ini latihan JavaScript pertamaku.");

// 2. Data siswa
const nama = "Azriel Febriyan M";
const kelas = "X RPL 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

// 3. Hasil nilai Azriel
const rataRata = (nilaiTugas + nilaiUts + nilaiUas) / 3;
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

let nilai = 68;
if (nilai >= 75) {
console.log("Lulus");
} else {
console.log("Remedial");
}

let nilai = 95;

// Urutan salah: kondisi paling longgar diperiksa lebih dulu
if (nilai >= 70) {
console.log("Predikat C");
} else if (nilai >= 80) {
console.log("Predikat B");
} else if (nilai >= 90) {
console.log("Predikat A");
}