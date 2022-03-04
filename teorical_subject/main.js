// console.log(ad);
// a();
// var ad = 'emre';

// function a() {
//     console.log("merhaba");
// }

// function b() {

//     function c() {

//     }
//     c();
//     a();
// }
















// console.log(sayi);
// a();
// console.log(sayi);
// var sayi = 1;
// var sayi = 2;

// console.log(sayi);


// a();
// function a() {
//     console.log('naber');
// }
// a();
// function a() {
//     console.log('merhaba');
// }
// a();


//2.soru

// console.log(renk);
// var renk = 'mavi';

// var rengiSoyle = function () {
//     console.log("En sevdigim renk : " + renk);


//     var renk = 'yeşil';
//     console.log("Şimdi en sevdigim renk : "+renk);
// }

// rengiSoyle();

// //function decleration
// function ad() { }

// //function expression
// var dene = function () {

// }

// ad();
// dene();


// function a() {
//     console.log(arguments);
// }

// a();

// function toplam(s1, s2) {
//     console.log(arguments);
//     //Array.from(arguments)
//     return s1 + s2;
// }

// var sayi = toplam(5, 6);
// console.log(sayi);




// var sayi = 40;
// function a() {

//     b();
//     console.log(sayi);
// }

// function b() {

//     c();
//     console.log(sayi);
// }
// a();
// function c() {
//     console.log(sayi);

// }


// var sayi = 10;

// function a() {


//     function b() {


//         function c() {

//             console.log(sayi);
//         }

//         c();
//     }

//     b();
// }

// a();

// function a() {
//     var isim = 'emre';

//     if (5 > 4) {
//         console.log(isim);
//         var ad = 'yunus';
//     }

//     for (var i = 0; i < 3; i++){
//         console.log(isim);
//         console.log(ad);
//     }

//     console.log(++i);

//     var ad = 'hasan';
//     console.log(ad);
// }

// a();


//let ve const ile olusturulan değişkenler block scope

// function a() {
//     let isim = 'emre';

//     if (5 > 2) {
//         console.log(isim);
//         let ad = 'yunus';
//     }

//     console.log(isim);
//     //console.log(ad);

//     for (let i = 0; i < 2; i++){
//         console.log(i);
//     }

//     //let isim = 'hasan';

//   //  console.log(i);

//     /*const sabit = 'emre';
//     sabit = 'yunus';*/



//     const obj = {
//         ad: 'emre',
//         soyad : 'altunbilek'
//     }

//     obj.ad = 'hasan';

//   //  console.log(a);
//     //let a = 20;

//     //obj = 'emre';
// }

// a();
// var test = 'test';
// let test1 = 'test1';
// const test2 = 'test2';


// (function () {
//     let isim = 'emre';
//     const yas = 32;

//     console.log("merhaba ben "+isim+" ve yasım "+yas);
// })();

// console.log(yas);


//////THIS KEYWORD //////////////////////////////////
//1 Implicit binding ==> fonksiyonun çağrıldığı noktanın solunda ne var this onu temsil eder

//object literal
// const emre = {
//     ad: 'emre',
//     yas:32,
//     adimiSoyle: function () {
//         console.log(this);
//         console.log(this.ad);
//     },
//     yasimiSoyle() {
//         console.log(this);
//         console.log(this.yas);
//     }
// }
// const hasan = {
//     ad: 'hasan',
//     yas:52,
//     adimiSoyle: function () {
//         console.log(this);
//         console.log(this.ad);
//     },
//     yasimiSoyle() {
//         console.log(this);
//         console.log(this.yas);
//     },
//     sevgili: {
//         ad: 'ayse',
//         sevgiliAdiniSoyle() {
//             console.log(this);
//             console.log(this.ad);
//         }
//     }
// }

//emre.adimiSoyle();
//hasan.yasimiSoyle();
/*
const adSoyle = function () {
    console.log(this);
        console.log(this.yas); 
}*/

/*const adSoyle = emre.adimiSoyle;
adSoyle();*/

//hasan.sevgili.sevgiliAdiniSoyle();

// const fonk = hasan.sevgili.sevgiliAdiniSoyle;
// fonk();

//2 exclicit bindings
//call, bind, apply

// const emre = {
//     ad: 'emre',
//     yas: 32,
//     okul : 'ege'
// }

// const hasan = {
//     ad: 'hasan',
//     yas: 22,
//     okul : 'marmara'
// }

// const bilgilerimiYazdir = function (...args) {
//     console.log(this);
//     console.log(`benim adım ${this.ad} yaşım ${this.yas} okulum ${this.okul}`); 
//     console.log(`sevdigim renkler ${args}`);
// }

/*
bilgilerimiYazdir.call(hasan, 'kırmızı', 'mavi');
bilgilerimiYazdir.apply(hasan, ['kırmızı', 'mavi', 'yesil']);
*/
// const cagir = bilgilerimiYazdir.bind(emre, ['kırmızı', 'mavi', 'yesil']);
// cagir();


// //new Binding
// const Araba = function (renk, model) {
//     this.renk = "benim rengim " + renk;
//     this.model = model;
//     this.bilgiler = function () {
//         console.log(this.renk);
//         console.log(renk);
//     }
// }

// const honda = new Araba('kırmızı', 'civic');
// honda.bilgiler();


//1 emre.method();
//2 method.bind(hasan);
//new 
//window

//arrow function

// function fonksiyon1() {
//     console.log(this);
// }

// fonksiyon1();

// const sayi = 10;

// const fonksiyon = () => {
//     console.log(this);
//     //console.log(sayi);
// }

// fonksiyon();

// const emre = {
//     ad: 'emre',
//     adiniSoyle: () => {
//         console.log(this);
//         console.log(this.ad);
//     }
// }
// emre.adiniSoyle.call(emre);

// const emre = {
//     ad: 'emre',
//     adiniSoyle() {
//         console.log(this);
//         console.log(this.ad);
//     }
// }

// emre.adiniSoyle();


// const emre = {
//     ad: 'emre',
//     arrowFunction: null,
//     normalFunction:  () => {
//         console.log(this);
//         emre.arrowFunction = () => {
//             console.log(this);
//         }
//     }
// }

// emre.normalFunction();
// emre.arrowFunction();

/*const okul = {
    isimler: ['emre', 'hasan', 'ali'],
    idler: [1552, 2545, 5453],
    ogrencileriYazdir() {
        const that = this;
        this.isimler.forEach(function (isim, index) {
            console.log(that);
            console.log(isim, that.idler[index]);
        });
    },
    idleriYazdir() {
        this.idler.forEach((id, index) => {
            console.log(id);
            console.log(this);
        });
    },
    ogrenciSayisiniVer() {
        setTimeout(() => {
            console.log(this);
            console.log("toplam ogrenci sayısı:" + this.isimler.length);
        }, 2000)
    }
}*/

//okul.ogrencileriYazdir();
//okul.idleriYazdir();
//okul.ogrenciSayisiniVer();

// class Ekran {
//     constructor() {
//         this.baslik1 = document.querySelector('h1');
//         this.baslik2 = document.querySelector('h2');
//         this.baslik3 = document.querySelector('h3');     
//         this.sayi = 10;
//         this.baslik1.addEventListener('click', this.baslikTiklandi.bind(this));

//         this.baslik2.addEventListener('click', () => {
//             this.baslik2Tiklandi();
//         });

//         this.baslik3.addEventListener('click', function () {

//         });
//     }

//     baslikTiklandi() {
//         console.log('calisti');
//         console.log(this);
//         console.log(this.sayi);
//     }

//     baslik2Tiklandi() {
//         console.log('calisti');
//         console.log(this);
//     }
// }

// const ekran = new Ekran();


/*
const baslik1 = document.querySelector('h1');
const baslik2 = document.querySelector('h2');
const baslik3 = document.querySelector('h3');

baslik1.addEventListener('click', function (e) {
    console.log(this);
});


const sayi = 20;
baslik2.addEventListener('click', baslikTiklandi);

function baslikTiklandi(e) {
    console.log(e.target);
    console.log(this);
    console.log(sayi);
}
*/


//CLOSURE

// const ikiyleCarp = sayi => sayi * 2;

// const s1 = ikiyleCarp(5);
// const s2 = ikiyleCarp(9);

// console.log(s1,s2);

// const dis = () => {

//     let sayac = 0;
//     const arttir = () => {
//         sayac++;
//         console.log(sayac);
//     }
//     return arttir;
// }

// const sonuc = dis()

// const s2 = sonuc();

// sonuc();
// sonuc();
// sonuc();


//CLOSURE ORNEK 1

// const sayilariTopla = () => {
//     console.log("fonksiyon basladı");

//     const a = 20, b = 30;
//     const c = 70;

//     const topla = () => {
//         console.log("toplam "+ (a+b));
//     }

//     setTimeout(topla, 6000);
//     console.log("fonksiyon bitti");
// }

// sayilariTopla()


//closure ornek 2

// const sayacIslemleri = () => {
//     console.log("fonksiyon basladı");
//     let sayac = 0;

//     const h1 = document.querySelector('h1');
//     const h2 = document.querySelector('h2');

//     h1.addEventListener('click', () => {
//         sayac++;
//         console.log("arttır: "+sayac);
//     });

//     h2.addEventListener('click', () => {
//         sayac--;
//         console.log("azalt: "+sayac);
//     });
//     console.log("fonksiyon bitti");
// }

// sayacIslemleri();

// const hesapMakinesi = (s1,s2) => {

//     function topla() {
//         console.log("toplam:"+ (s1+s2));
//     }

//     function carp() {
//         console.log("carpım:"+ (s1*s2));
//     }

//     return {
//         topla,
//         carp
//     }

// }

// const uygulama = hesapMakinesi(9,10);
// uygulama.topla();
// uygulama.carp();
// console.log(uygulama);


// function kronometreUygulamasi() {

//     let baslangicZamani = Date.now();
//     console.log("baslangicZamani "+ baslangicZamani);

//     function neKadarSurdu() {
//         let gecenZaman = Date.now() - baslangicZamani;
//         console.log("Geçen zaman "+gecenZaman+" milisaniyedir");
//     }

//     return neKadarSurdu;
// }

// const kronometre = kronometreUygulamasi();


// for (let i = 0; i < 500000; i++){
//     let gecici = Math.random() * 50000;
// }

// kronometre();

//Closure Faydaları
//1-Memory 2-Encapsulation

function ogrenciyiBul(id) {
    const ogrenciDizisi = new Array(10).fill({ ad: '', id: 0 })
        .map(function (ogr, index) {
            return {
                ad: 'öğrenci ' + index,
                id: index
            }
        });

    console.log("Dizi olusturuldu ve de dolduruldu");
    return ogrenciDizisi[id];
}

/*console.log(ogrenciyiBul(5));
console.log(ogrenciyiBul(2));
console.log(ogrenciyiBul(3));
console.log(ogrenciyiBul(4));
console.log(ogrenciyiBul(1));*/

/*function ogrenciIslemleri() {
    const ogrenciDizisi = new Array(10).fill({ ad: '', id: 0 })
        .map(function (ogr, index) {
            return {
                ad: 'öğrenci ' + index,
                id: index
            }
        });

    console.log("Dizi olusturuldu ve de dolduruldu");

    function ogrenciyiBul(id) {
        return ogrenciDizisi[id];
    }
    function ogrenciyiSil(id) {
        return ogrenciDizisi[id];
    }
    function ogrenciyiGuncelle(id) {
        return ogrenciDizisi[id];
    }

    return {
        bul: ogrenciyiBul,
        guncelle: ogrenciyiGuncelle,
        //sil : ogrenciyiSil
    };
}

/*const bul = ogrenciIslemleri();
console.log(bul(6));
console.log(bul(6));*/

// const islemler = ogrenciIslemleri();
// console.log(islemler.bul(5));
// console.log(islemler.guncelle(5));
//console.log(islemler.sil(5));

let db;

function birKereCalistir() {
    let counter = 0;

    return function () {
        if (counter > 0) {
            console.log("db baglantısı zaten yapıldıgı için işlem yapılmayacak");
            return;
        } else {
            counter++;
            db = 'baglanıldı';
            console.log("db baglantısı yapıldı");
        }   
    }
   
}

const initialize = birKereCalistir();
initialize();
initialize();
initialize();
initialize();














