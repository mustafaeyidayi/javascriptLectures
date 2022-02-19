const isimler=['emre','ali','hasan','ayse'];

const sayilar=[1,50,41,41,84,8,35,3];

const ogrenciler=[
    {id:12,isim:'emre',yas:25},
    {id:22,isim:'hasan',yas:15},
    {id:32,isim:'fatma',yas:55},
    {id:13,isim:'nuriye',yas:19},
    {id:92,isim:'kemal',yas:45},
    {id:15,isim:'mustafa',yas:75},
    {id:44,isim:'seher',yas:30},
    {id:36,isim:'alperen',yas:23}
];
//arrayleri kopyalamak
// let kopya=[];
// for(let item of isimler){
//     kopya.push(item);
// }
// isimler.sort();

//let kopya=Array.from(isimler);//2. yöntem

let kopya=[...isimler];//3. yöntem

console.log(kopya);
console.log(isimler);

const ad="mustafa eyidayi";
const harfler=Array.from(ad);
const harfler2=ad.split("");
const harfler3=[...ad];
console.log(harfler);
console.log(harfler2);
console.log(harfler3);
//******************************************** */

// kaç tane parametre gelecegini bilmediğimiz durumlarda spread operatör kullanırız.
function sayilariTopla(...parameters) {
    let toplam=0;
    for (let s of parameters){
        toplam+=s;
    }
    console.log("toplam= "+toplam);
}

sayilariTopla(1,2,3);
sayilariTopla(20,25,35,80,-900);
sayilariTopla();
