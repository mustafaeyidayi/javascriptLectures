

//her bir array indeksi için bu fonksiyon işliyor.
let sayilar=[1,2,3,4,5,6];
const k=sayilar.forEach(function(sayi) {
   if (sayi>3) {
    console.log(sayi*2);
   }
    
});


console.log("*****************************");
for(i=0;i<sayilar.length;i++){
    console.log(sayilar[i]);
}
console.log("*****************************");
for(let item of sayilar){

    console.log(item);
}
// kendi forEach fonksiyonumuz
function diziyiYazdir(dizi,callback){
    for(let i=0;i<dizi.length;i++){
    callback(dizi[i],i);

}
}
diziyiYazdir(sayilar,function(deger,index){
    console.log("değer: "+deger+" index: "+index);
})

