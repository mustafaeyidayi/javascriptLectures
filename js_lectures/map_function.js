const sayilar=[1,2,3,4,5,6];
//yine her bir indeximiz için fonksiyonu gerçekleştirecek ve sayılar arrayini bozmayacak.
const yeniSayilar=sayilar.map(function sayiCarp(sayi){
    return sayi*2;
})
console.log(sayilar);
console.log(yeniSayilar);

const kitaplar=[{adi:"gotrns", sayfasi:350},
                {adi:"hptr", sayfasi:550},
                {adi:"yzk", sayfasi:670}
            ];
                
const sayfaSayilari=kitaplar.map(function sayfaSayisi(kitap){
    return kitap.sayfasi;
})
console.log(sayfaSayilari);

//kendi map fonksiyonumuz

function kendiMapFonk(dizi,islem){
    let yeniDizi=[];
    for(let i=0;i<dizi.length ;i++){
        yeniDizi.push(islem(dizi[i]));
    }
    return yeniDizi
}
const olusanYeniDizi=kendiMapFonk(sayilar,function(sayi){
    return sayi*4;
})
console.log(olusanYeniDizi);