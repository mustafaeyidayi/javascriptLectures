let isim="musti";//herhangi bir fonksiyona baglılığı olmadığından bu globaldir.
function selamVer(veri1){
let yas=27;//sadece bu iki süslü parantez arasında life cycle ı olduğu için lokaldir.
console.log("merhaba "+veri1);

}
selamVer(isim);

let favoriRengim="yeşil";//globaldir.
favoriRenginiSoyle(favoriRengim);

function favoriRenginiSoyle(renk){

let favoriRengim="sarı";//shadowed çünkü bu süsü prantezler içerisinde globalden önce gelir.
console.log("favori rengim "+favoriRengim );

}