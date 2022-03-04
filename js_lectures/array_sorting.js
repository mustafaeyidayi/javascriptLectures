const isimler=['emre','ali','hasan','ayse'];

const sayilar=[1,50,41,41,84,8,35,3];

const ogrenciler=[
    {id:12,isim:'emre',yas:25},
    {id:22,isim:'hasan',yas:15},
    {id:32,isim:'fatma',yas:55},
    {id:13,isim:'nuriye',yas:19},
    {id:92,isim:'kemal',yas:45},
    {id:15,isim:'mustafa',yas:75},
    {id:44,isim:'seher',yas:30},
    {id:36,isim:'alperen',yas:23}
];
//string dizi a-z sıralama
isimler.sort();//ana kaynağımı bozarak sıralama yaptı.
console.log(isimler);
//string dizi z-a sıralama
const zdenAyaSiraliDizi=isimler.reverse();//reverse fonksiyonu öncesinde mutlaka sıralanmış bir dizi ister.
console.log(zdenAyaSiraliDizi);
// sayıları kücükten<->büyüğe sıralama
const kbsirali=sayilar.sort(function(a,b){
    return a-b;//pozitif negatifliğe göre sayıları sağa veya sola atar.
})
console.log(kbsirali);
const bksirali=sayilar.sort(function(a,b){
    return b-a;
})
// console.log(bksirali);

// //nesneleri sıralama
// //id veya yas gibi sayı değişkenleriyle yapılan sıralama 
// const idSiralaması=ogrenciler.sort(function(a,b){
// return a.id-b.id;
// });
// console.log(idSiralaması);
//string ile yapılan sıralama
// const isimSiralamasi=ogrenciler.sort(function(a,b){
       
//     if (a.isim<b.isim) {
//         return -1;
//     }else if (a.isim>b.isim) {
//         return +1;
//     } else {
//         return 0;
//     }
//     });
//     console.log(isimSiralamasi); 
// yukarıdaki ifin kısa yazımı
const isimSiralamasik=ogrenciler.sort((a,b)=>(a.isim<b.isim)?-1:(a.isim>b.isim)?+1:0);
    console.log(isimSiralamasik); 
