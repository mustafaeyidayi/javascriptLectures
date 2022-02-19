let arabaMarka1="mercedes";
let arabaMarka2="audi";
let arabaMarka3="bmw";


let arabaMarkalari=["mercedes" ,"audi" ,"bmw"];
console.log(arabaMarkalari);

arabaMarkalari[3]="honda";//3. index e ekledik.
let diziElemanSayisi=arabaMarkalari.push("fiat");// sonuna ekler ve yeni array uzunluğunu döndürür.

console.log(arabaMarkalari.toString());
console.log(arabaMarkalari.join(" | "));//aralarına içeride belirlediğimiz şeyi koyarak gösterir.
console.log(arabaMarkalari[0]);//mercedes gözükür.indexler 0 dan başlar en son indexten bir fazla eleman sayısı vardır. 
console.log("yeni dizinin eleman sayısı: "+diziElemanSayisi );
arabaMarkalari.pop();// dizinin son elemanı yani fiyatı çeker ve çıkarılan elemanı return eder.
//dizi elemanlarını yazdırma
for(let i=0;i<arabaMarkalari.length;i++){
    console.log(arabaMarkalari[i]);
}
console.log("**************************");

//dizi elemanlarını yazdırma
for(let oankiDiziElemani of arabaMarkalari){

    console.log(oankiDiziElemani);

}
//dizinin içinde farklı degerlerde tutabiliriz.
let yeniDizi=[1,"musti",true];
for(let i of yeniDizi){

    console.log(i);
}
let sayiDizisi=[0,1,2,3,4,5,6,7];
for(let i of sayiDizisi){

    console.log(i);
}
let cikarilanEleman=sayiDizisi.shift();//ilk elemanı siler ve sildiğini return eder.
console.log(sayiDizisi.toString());
console.log(cikarilanEleman);
sayiDizisi.unshift(9);//başına birşey eklemek istediğimizde kullanırız ve uzunluğa return eder.
console.log(sayiDizisi.toString());

//belirlediğimiz array uzunluguna göre random değerli array oluşturma
let arrayUzunlugu=9;
let newArray=[];
for(let i=0;i<arrayUzunlugu;i++){
    let randomSayi=parseInt(Math.random()*10);
    newArray.unshift(randomSayi);
}
console.log(newArray.toString());

let array1=[0,1,2,3,4,5,6,7,8,9,10];
let silinenler=array1.splice(0,5);//girilen aralıktaki değerleri silme işlemi yapar.sildiği elemanları array olarak return eder.

console.log(array1.toString());
console.log(silinenler.toString());

let tekSayilar=[1,3,5];
let ciftSayilar=[2,4,6,8];
let sayilarim=tekSayilar.concat(ciftSayilar);// iki arrayi birleştirip yenisini oluşturur.
console.log(sayilarim.toString());
let newArray2=sayilarim.slice(2,6);
console.log(newArray2.toString());