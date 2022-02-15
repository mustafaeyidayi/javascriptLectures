function selamVer(){

    console.log("merhaba");

}
selamVer();

const selamVerDegisken=function(){
    console.log("merhaba düz kullanım");
}
selamVerDegisken();

//aşagıdaki şekilde de tanımlayabilirz buna fat arrow diyoruz.
const fatArrow=()=>{
    console.log("merhaba fatArrow kullanım");
}
fatArrow();

function karesiniAl(sayi){

return sayi*sayi;

}

console.log(karesiniAl(5));

const karesiniAlDuz=function(sayi){
    return sayi*sayi;
}
console.log(karesiniAlDuz(4));

//aşagıdaki şekilde de tanımlayabilirz buna fat arrow diyoruz.
const fatArrow2=(sayi)=>{

    return sayi*sayi;
}
console.log(fatArrow2(6));

//fat arrow u çok kısa halde yazabiliriz.süslü prantez olmadığı için return kullanmayız.örnegin:
const sayilariTopla=(s1,s2)=> s1+s2;

console.log(sayilariTopla(1,25))