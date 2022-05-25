/*
var angka = parseInt(prompt("Masukkan Angka :"));
switch (angka) {
  case 1:
    alert("Anda memasukkan angka 1");
    break;
  case 2:
    alert("Anda memasukkan angka 2");
    break;
  case 3:
    alert("Anda memasukkan angka 3");
    break;
  default:
    alert("Maaf salah");
    break;
}
*/
// ParseInt buat ubah isi prompt jadi int , karna default prompt itu string

var item = prompt(
  "Pilih makanan/minuman dibawah ini : \n (nasi, daging, susu, hamburger, softdrink)"
);

// switch (item) {
//   case "nasi":
//     alert("Makanan / minuman yang itu sehat!");
//     break;
//   case "daging":
//     alert("Makanan / minuman yang itu sehat!");
//     break;
//   case "susu":
//     alert("Makanan / minuman yang itu sehat!");
//     break;
//   case "hamburger":
//     alert("Makanan / minuman yang itu kurang sehat!");
//     break;
//   case "softdrink":
//     alert("Makanan / minuman yang itu kurang sehat!");
//     break;
//   default:
//     alert("Maaf salah masukin makanan/minuman, tolong isi yang ada di list");
//     break;
// }

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("Makanan / minuman yang itu sehat!");
    break;
  case "hamburger":
  case "softdrink":
    alert("Makanan / minuman yang itu kurang sehat!");
    break;
  default:
    alert("Maaf salah masukin makanan/minuman, tolong isi yang ada di list");
    break;
}
