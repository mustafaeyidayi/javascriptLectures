let mustafa= {

adi:"Mustafa",
soyAdi:"Eyidayı",
dogumYili:1994,
evliMi:false,
sevdigiRenkler: ["mavi", "yeşil"],
yasiHesapla:function(){
   this.yas= 2022-this.dogumYili;//objenin içindekideğişkeni kullanmak istiyorsak this.değişken yaparız.
}

}
let alperen= {

    adi:"Alperen",
    soyAdi:"Eyidayı",
    dogumYili:1998,
    evliMi:false,
    sevdigiRenkler: ["mor", "sarı"],
    yasiHesapla:function(){
       this.yas= 2022-this.dogumYili;//objenin içindekideğişkeni kullanmak istiyorsak this.değişken yaparız.
    }
    
    }
console.log(mustafa);
console.log(mustafa.evliMi);
console.log(mustafa["dogumYili"]);
mustafa.yasiHesapla();
console.log(mustafa.yas);
mustafa.soyAdi="kötüdayi";//soy adını değiştirme
console.log(mustafa);

let ailem=[mustafa,alperen];//objeleri aile dizisinde saklama
console.log(ailem[0].sevdigiRenkler.toString());

//bir diğer object gösterimi ise
let ayse= new Object();
ayse.adi="Ayşe";
ayse.dogumYili="1961";
console.log(ayse);

//array ve objeler üzerinde gerçekleştirilen işlemleri referans aldıkları değerde uygularlarken
//primitive tipler (number, string, boolean etc.) değeri o an neye veriyorsak onda değişikliğe uğrattır.

let person= {
adi:"mustafa",
yas:27,
evliMi:false

}
console.log(person.adi);
console.log(typeof person);
console.log(person instanceof Object );