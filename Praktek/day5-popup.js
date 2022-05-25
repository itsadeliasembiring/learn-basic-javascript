// === Alert ===
// alert("Hei bung");
// alert("Anjay");
// alert("hahaha.");

// === Prompt ===
// prompt("Masukkan nama drakor kesayangan anda:");
// === Prompt Versi Variabel===
// var drakor = prompt("Masukkan nama drakor kesayangan anda:");
// console.log(drakor);
// alert(drakor);

// === Confirm ===
// confirm("Apakah benar?");
// var testing = confirm("Apakah betul?");
// alert(testing);
// contoh kita nentuin apa yang terjadi kalo salah satu tombol di tekan
// if (testing === true) {
//   alert("True banh");
// } else {
//   alert("true mint");
// }

// Mini app
alert("Selamat datang di indomaret :)");
var e = true;
while (e === true) {
  var nama = prompt("Masukkan Nama Anda:");
  alert("Haiiii bung " + nama);

  e = confirm("coba lagi ndak banh?");
}

alert("Thanks.");
