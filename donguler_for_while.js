//for döngüsü
//for(ilk atama;dongu_calistirma_sarti;her_calisma_sonrası_ne_olacak)
//for dan sonra noktalı virgül kullanma 
for(let i=0;i<3;i++){

    console.log("mustafa");
    console.log("nasılsın");

}

// tanımladığımız i ve j değişkenleri o for döngüsünün içeirsinde yaşar süslü parantezin dışında tanımsız olur.
for(let i=0,j=0;i+j<20;i=i+5,j=j+2){

    console.log("i degeri= "+i+" j degeri= "+j);
}

//belli bir koşul devam ettikçe çalışma durumunda while döngüsünü kullanırız.

let sayi=0;
while (sayi<15) {
    console.log("mustafa"+sayi);
    sayi+=3;
}


//condition sağlandıkça şunu yap dediğimiz işlemlerde kullanılır.
//şartım doğru olsun veya olmasın en az bir kere çalışır.
let sayi1=0;

do {
    console.log("eyidayı"+sayi1);
    sayi1++;
} while (sayi1<5);

//break continue ve return komutları

//break var olan döngüyü sonlandırmaya yarar.
for(let i=0;i<5;i++){
    if(i==3){
    break;
    }
console.log("break kullanımı");
}

//continue(i değeri 5 olduğundaki durumu atla ve devam et )
for(let i=0;i<8;i++){
    if(i==5){
        continue;
    }
    console.log("continue kullanımı"+i);
}

// //return
// //fonksiyonun içinde değilse illegal return statement hatası alırız.
// for(let i=0;i<10;i++){
// if(i==5){
//     return;
// }
//     console.log("return kullanımı"+i);

// }

