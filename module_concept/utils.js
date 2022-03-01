export class Ogrenci{

    constructor(ad,id) {
        this.ad=ad;
        this.id=id;
        this.bilgileriniSoyle();
    }
bilgileriniSoyle(){
    console.log(`ad:${this.ad} ve id:${this.id}`);
}
}

export const pi=3.14;

function sayilariTopla(s1,s2){
    console.log(s1+s2);
}
export function sayilariCarp(s1,s2) {
    console.log(s1*s2);
}
function sayilariBol(s1,s2) 
{
    console.log(s1/s2); 
}
export default function selamVer(adiniz) {
    
    console.log(`hosgeldiniz ${adiniz}`);
}

export{
    sayilariTopla,
    sayilariBol
}