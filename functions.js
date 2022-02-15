//0 dan başlayıp 10 ay kadar toplama işlemi için olan for 

let toplam=0;
for(let i=0;i<=10;i++){
toplam=toplam+i;

}
console.log(toplam);

// 30 dan başlayıp 60 a kadar toplama işlemi yapan for 
let toplam2=0;
for(let i=30;i<=60;i++){
toplam2=toplam2+i;

}
console.log(toplam2);

// fakat biz bir for döngüsü yaparak belirlediğimiz aralıklardaki sayıların toplamını oluşturmak
// istiyoruz ve ayrı ayrı kod yazarak makinemizi yormak istemiyoruz bunun için fonksiyon kullanmamız gerekiyor.

function selamVer(){

    console.log("merhaba");

}

selamVer();//fonksiyonu kod satırının herhangi bir yerinde tanımlamak yeterlidir
       //illaki tanımladıktan sonra kullanmamız gerekmez.


function sayilariTopla(i,j){
let toplam3=0;
for(i;i<=j;i++){

    toplam3=toplam3+i
}
return toplam3;//return den sonra yazılan kodlar konsolda gözükmeyecektir.
}
sayilariTopla(0,5);

//eger ki bu sayilariTopla fonksiyonumuzdan aldığımız sayıyı bir yerde tutmak istiyorsak
// fonksiyonun içinde return kullanmalıyız.

let genelToplam=sayilariTopla(0,6);
console.log(genelToplam);