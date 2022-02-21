//person constructor function
function Person(ad,soyAd){
    this.ad=ad;
    this.soyAd=soyAd;
}
Person.prototype.selamVer=function(){
    return `Merhaba ben insan ${this.ad} ${this.soyAd}`;
}
const mustafa=new Person('mustafa','eyidayı');
console.log(mustafa);
console.log(mustafa.ad);

//ogrenci constructor oluşturma
function Ogrenci(ad,soyAd,sinif,yas){
    // this.ad=ad;
    // this.soyAd=soyAd;//bu ögeler insanda da bulunur ögrencide insandır ve kod tekrarına düşmemek için insana özgü özellikleri çagırırız.
    Person.call(this,ad,soyAd);
    this.sinif=sinif;
    this.yas=yas;
}

Ogrenci.prototype.selamVer=function(){
    return`Merhaba ben ${this.sinif}. sınıfa giden ${this.ad} ${this.soyAd} `
}
// eğer ki her insan özgü olan prototype'ı öğrencide de göstermek istiyorsak:
Ogrenci.prototype=Object.create(Person.prototype);
Ogrenci.prototype.constructor=Ogrenci;
Ogrenci.prototype.sinifSoyle=function(){
    return`Benim sınıfım ${this.sinif}`;
}
const alperen=new Ogrenci('alperen','Eyidayı',9,16);
console.log(alperen);
console.log(alperen.sinifSoyle());




function MyArray(){

}

MyArray.prototype=Object.create(Array.prototype);
const array1=new MyArray;
array1.push(1);
array1.push('asd');
console.log(array1);

//onceden oluşturdugumuz kendi map yapımızı Arrray objesine prototype olarak ekledik.

Array.prototype.kendiMapYapım=function(islem){
    let dizi=[];
    for(let i=0;i<this.length;i++){
        dizi.push(islem(this[i],i));
    }
    return dizi;

}
const dizi=[1,2,3,4];
const dizi1=[1,2,3,4];
const myYeniDizi=dizi.kendiMapYapım(function ikiEkle(sayi){
    return sayi+2;
})
const myYeniDizi1=dizi1.map(function(sayi){
    return sayi+2;
})
console.log(myYeniDizi);
console.log(myYeniDizi1);


