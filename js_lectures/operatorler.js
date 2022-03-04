//aritmetik operatörler
let sayi1=20;
let sayi2=35;
let sonuc= sayi1+sayi2;
let sonuc2=sayi1-sayi2;
let sonuc3=sayi1*sayi2;
console.log(`${sonuc} ${sonuc2} ${sonuc3}`);

//artırma azaltma operatörleri

sayi1=sayi1+1;
console.log(sayi1);
sayi2--;//--sayi2 de yazabiliriz tek başına kullanırken ama yazdırırken başına koymamız gerekir.
console.log(sayi2);

//+=  +/  -= gibi işlerde soldaki sayıyı alarak sagdaki ile işleme sokar ve yeni sayı o işlemin sonucu olur.

let sayi3=10;
let sayi4=2;
//sayi3+=sayi4;
console.log("yeni sayi3 = "+ sayi3);

//karşılaştırma operatörleri

console.log(sayi3 < sayi4);//false verir
console.log(sayi3 <= sayi4);
console.log(sayi3 > sayi4);
console.log(sayi3 >= sayi4);
console.log(sayi3 != sayi4);//eşit değilliğini ölçer
console.log(sayi3 == sayi4);//eşitliğini ölçer

let yas=27;
let metinOlarakYas="27";//aslında burdaki deger bir stringtir ama javascript 
//bu kıyasalamada oraya yazdıgımız degeri sayı kabul eder
console.log(yas == metinOlarakYas);

//mantıksal operatörler ve, veya
console.log((sayi3 > 7) && (sayi4 < 5 ) );//true verir.
console.log((sayi3 > 11) && (sayi4 < 5 ) );//false verir.
console.log((sayi3 > 11) || (sayi4 < 1 ) );//ikiside yanlış oldugu için false verir bir tanesi dogru olsa true verecekti.

