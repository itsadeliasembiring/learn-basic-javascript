/* 
Looping => Melakukan hal yang sama berulang kali

while(kondisi) {
    aksi
}
cara bacanya : selama kondisi bernilai true maka lakukan aksi

Infinite loop => pengulangan tanpa batas, bisa dihentiin sama user ataupun program
contoh:
while (true) {
  console.log("true banh");
}

== Cara menghentikan infinite loop ==
1. Ver user:
note: berhenti pas confirmnya di klik cancel
var ulangan = true;
while (ulangan) {
  console.log("Masih trrrrrrueeeeee");
  ulangan = confirm("Ulang lagi gak?");
}
2. Ver program:
nilai awal
while (kondisi terminasi){
    aksi
    increment/decrement
}

== Pengulangan while == 
nilai awal
while (kondisi terminasi){
    aksi
    increment/decrement
}

== Pengulangan For ==
for(nilaiAwal;kondisi;increment/decrement) {
  aksi
}

*/
