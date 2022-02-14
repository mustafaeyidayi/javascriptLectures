//2 tip veri türü vardır.
//primitive ve referans veri türleri

//primitive tipler:Number, string, Boolean, Undefined, Null, Symbol
//referans tipler:object
//JS de dinamik veri türü vardır, bizim verdiğimiz degere göre değişir.

//number
let sayi=55;
console.log(sayi); 
console.log(typeof sayi);


let ondalikSayi=55.55;
console.log(ondalikSayi); 
console.log(typeof ondalikSayi);


let negatifSayi=-55;
console.log(negatifSayi); 
console.log(typeof negatifSayi);

//string (genelde çift tırnak içinde yazılır.)
let ad="Mustafa";
console.log(ad);
console.log(typeof ad);
let soyIsim="Eyidayı";
let tamIsim=ad+" "+soyIsim;
console.log(tamIsim);

//altgr+virgül tuşuna iki kez basıp
let tamIsim2=`${ad} ${soyIsim}`;
console.log("template literal ile yazılmıs "+tamIsim2);

//boolean(true/false degerlerini yüklüyoruz )
let asalSayi=true;
console.log(typeof asalSayi);
console.log(`veri türümüzün degeri ${asalSayi} veritipi: ${typeof asalSayi}`); 
console.log("veri türümüz "+ typeof asalSayi);

//tanımlanmamış yani undefined

let renk;
console.log(renk);
    
//null obje olsada primitive dir
let yas=null;
console.log("veri tipi "+typeof yas );