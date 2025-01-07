alert('Permainan Tebak Angka!\npilihlah angka dengan rentan 1-100\nketika angka yang diberikan tidak sesuai maka rentan akan diperkecil sesuai dengan angka yang kamu pilih\nkamu memiliki 5 kesempatan untuk menebak angka yang benar');

var min = 1;
var max = 100;
function getRandomInRange(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
var nilai = getRandomInRange(min, max);

var angka = prompt('Angkanya berada direntan '+min+'-'+max+'\nMasukkan angka tebakkan mu!');

console.log(nilai)

for(var i=0; i<4; i++){
    if(angka==nilai){
        break
    } else {
        alert('Salah!');
        if(angka>nilai){
            max = angka;
        } else {
            min = angka
        }
        var angka = prompt('Coba lagi!\nAngkanya berada direntan '+min+'-'+max+'\nMasukkan angka tebakkan mu!');
    }
}

if(angka==nilai){
    alert('Benar!');
    alert('Angkanya adalah '+nilai+'\nSelamat kamu berhasil memenangkan permainan')
} else {
    alert('Salah!');
    alert('Maaf, kesempatan mu sudah habis, angkanya adalah '+nilai+'\nsemoga beruntung lain kali')
}

alert('Terimakasi sudah bermain!')
// while(continue==true){
//     alert('Salah! coba lagi')
//     var angka = prompt('Angkanya berada direntan '+min+'-'+max+'\nMasukkan angka tebakkan mu!');
// }

// if(angka==nilai){
//     alert('Benar!\nagkanya adalah '+nilai);
// } else {
//     alert('Salah! coba lagi')
//     var angka = prompt('Angkanya berada direntan '+min+'-'+max+'\nMasukkan angka tebakkan mu!');
// }