//aslında yine obje oluşturmuş oluyoruz çünkü js object oriented/prototype oriented bir yapıdır.


class Person {
    static sayac = 0;
    constructor(ad, soyAd) {
        this.ad = ad;
        this.soyAd = soyAd;
        Person.sayac++
    }
    selamVer() {
        return `merhaba ben ${this.ad} ${this.soyAd}`
    }
}
class Ogrenci extends Person {

    constructor(ad, soyAd, sinif) {

        super(ad, soyAd);//extend edilen yerin yani üst sınıfın değişkenlerini çektik.
        this.sinif = sinif;
    }
    sinifiniSoyle() {
        return `ben ${this.sinif}.sınıf ögrencisiyim.`;
    }
    selamVer() {
        return `merhaba ben ${this.ad} ${this.soyAd} ve sınıfım ${this.sinif}`
    }
}
const alperen = new Person('alperen', 'Eyidayı');
console.log(alperen.selamVer());
const mustafa = new Ogrenci('Mustafa', 'Eyidayi', 19);
console.log(mustafa.sinifiniSoyle());
console.log(mustafa.selamVer());
console.log(Personsayac);