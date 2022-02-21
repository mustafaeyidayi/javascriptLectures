// const mustafa={
//     isim:'Mustafa',
//     yas:27,
//     evliMi:false,
//     sevdigiRenkler:['black','white'],
//     adres:{
//         il:'Karaman',
//         ilce:'Ermenek'
//     },
//     bilgileriSoyle:function(){
// return `benim adım ${this.isim} yasım ${this.yas}`;//template literal
//     },
//     ['full-name']:'Mustafa Eyidayı',

// }
// console.log(mustafa.bilgileriSoyle())
// mustafa.yas=30;
// console.log(mustafa.bilgileriSoyle());

// const mustafa=createStudent('mustafa',27,false,'anadolu');
// const alperen=createStudent('alperen',23,false,'trabzon');

// //factory functions
// function createStudent(isim,yas,evliMi,okul,bilgiler){
//     return{
//         isim:isim,
//         yas:yas,
//         evliMi:evliMi,
//         okunanOkul:okul,
//         //metod
//         bilgileriGoster:function(){
//             return `Ögrencinin ismi: ${this.isim} ve yasi: ${this.yas} `;
//         }
//     }
// }

// console.log(mustafa.bilgileriGoster());
// console.log(alperen);

////ara bilgi: this o ana kadar orada yapılan bütün işlemleri kapsar.

//constructor functions
function Ogrenci(isim,yas,evliMi,okul,bilgiler){
    this.ad=isim;
    this.yas=yas;
    this.evliMi=evliMi;
    this.okunanOkul=okul;
    this.bilgileriGoster=function(){
        return `Ögrencinin ismi: ${this.isim} ve yasi: ${this.yas} `;
    }
}//new kullandıgımızda:
//yeni bir obje oluşturur.
//return yazmamıza gerek kalmaz.
//this kelimesini o an oluşturulan nesneye bağlar.yani aşagıdaki örnekte yunusa bağlar.
const yunus=new Ogrenci('yunus',22,false,'itu');
console.log(yunus);

//js deki tüm objeler onu oluşturan constructor fonksiyonun erişebilir.
console.log(yunus.constructor);
//js ile beraber gelen built in constructor fonksiyonlar vardır.

//yunusun yapıcısına git kemali üret 
const kemal=new yunus.constructor('kemal',64,true,'anadolu');
console.log(kemal);


//prototype kullanarak oluşturduğumuz constructor function da ortak olan değişken
//veya functionları tanımlayarak oluşturduğumuz her bir yeni aile üyesi için
//geçerli kılmış olduk.
Aile.prototype.soyAd='Eyidayı'
Aile.prototype.bilgileriGoster=function(){
    return`Aile üyesinin ismi: ${this.isim} ve yasi: ${this.yas}`
}
function Aile(isim,yas){
    this.isim=isim;
    this.yas=yas;
}
const seher=new Aile('seher',47)
console.log(seher.bilgileriGoster());
console.log(seher.constructor.prototype);
console.log(Object.getPrototypeOf(seher));

//Array's prototype
//**************ÇOK ÖNEMLİİİ ********************// 
let dizi=[];
console.log(dizi.constructor.prototype);

//wrapper yani sarmalayıcı objeler bizim primitive yapılarımızı js nin kendisinin oluşturduğu
//obje sınıfında değerlendirir ve nokta işareti kullanarak bu obje sınıfında kullanılarn prototypelara erişebiliriz.

const name='mustafa';
console.log(name.charAt(0));
console.log((typeof name));
const name1=new String('mustafa');
console.log(typeof name1);

