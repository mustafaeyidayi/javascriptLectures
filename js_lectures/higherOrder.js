// let myDizi=[1,2,3];

// const dizimiIkiIleCarp=function(dizi){
//     let geciciDizi=[];
//     for(let i=0;i<dizi.length;i++){
        
//         geciciDizi[i]=dizi[i]*2;

//     }
//     console.log(geciciDizi);

// }
// const dizimiIkiIleBol=function(dizi){
//     let geciciDizi=[];
//     for(let i=0;i<dizi.length;i++){
        
//         geciciDizi[i]=dizi[i]/2;

//     }
//     console.log(geciciDizi);

// }
// const dizimeUcEkle=function(dizi){
//     let geciciDizi=[];
//     for(let i=0;i<dizi.length;i++){
        
//         geciciDizi[i]=dizi[i]+3;

//     }
//     console.log(geciciDizi);

// }



// console.log(myDizi);;
// dizimiIkiIleCarp(myDizi);
// dizimiIkiIleBol(myDizi);
// dizimeUcEkle(myDizi);



//diziIşlemler fonksiyonun içine parametre olarak işlem fonksiyonunu atadık ve
//daha önceden tanımladığımız işlemleri bu fonksiyonun içinde çalıştırmış olduk 
//böylece yukarıdaki gibi ayrı ayrı yazmamıza gerek kalmadı.
let myDizi=[1,2,3];
const diziIslemleri=function(dizi,islem){
    let geciciDizi=[];
    for(let i=0;i<dizi.length;i++){
        
        geciciDizi[i]=islem(dizi[i]);

    }
    console.log(geciciDizi);
}
//first class function
const ikiyleCarp=function(sayi){
return sayi*2;
}
const ikiyleBol=function(sayi){
return sayi/2;
}
const ucEkle=function(sayi){
return sayi+3;
}

//higher order function: parametre olrak fonksiyon alan ve/veya return olarak fonksiyon
//kullanan fonksiyonlara denir.
//diziIslemleri fonksiyonu bir higher order fonksiyondur.
//ikiyeBol ve ucEkle fonksifonları cağrılan ve çagrıldığı yere de bir değer gönderen fonsiyonlardır, bunlra callback func. denir. 
diziIslemleri(myDizi,ikiyleBol);
diziIslemleri(myDizi,ucEkle);