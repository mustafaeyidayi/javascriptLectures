const sayilar=[1,2,3,4,5,6];
// map fonksiyonu
const yeniDizi=sayilar.map(function(sayi){
    return sayi*2;
})
console.log(yeniDizi);

//reducer ile map fonsiyonu
const yeniDiziReduce=sayilar.reduce(function(dizininOncekiHali,oAnkiSayi){
dizininOncekiHali.push(oAnkiSayi*5);
return dizininOncekiHali;
},[])
//reducer ile filtre fonksiyonu
const uctenBüyük=sayilar.reduce(function(pre,sayi,index){
    if (sayi>3) {
        pre.push(sayi);
    }
    return pre;
},[])
console.log(uctenBüyük);

//reducer ile find Fonksiyonu
const bitkiler=[
    {id:1,tur:'meyve'},
    {id:2,tur:'meyve'},
    {id:3,tur:'egzotik'},
    {id:4,tur:'ağaç'}
    ];
const sonuc=bitkiler.reduce(function(pre,oankieleman,index){
if(oankieleman.tur==="meyve"){
    pre.push(oankieleman);
    return pre;

}else{

    return pre;

}
}
,[]) 
console.log(sonuc);
//prantezlerin denkliğini kontrol ettiğim reducerlı program.
function parantezlerDenkMi(string){

    const parca=Array.from(string);
    const yeniArray=[];
    for(let i=0;i<parca.length;i++){
            if(parca[i]==='('){
        yeniArray.push(1);
        }else
        yeniArray.push(-1);
    }
    console.log(yeniArray);
    
const sonuc=yeniArray.reduce(function (pre,oAnkiEleman) {
   if(pre===1){
    return pre+oAnkiEleman;
   }else if(pre===-1)
   return pre;
   else{
    return pre+oAnkiEleman;
   }

   
   
},0)
console.log(sonuc===0);
}
parantezlerDenkMi("((((((((()))))))))");

const sayilar1=[1,2,3,4,5,6,7,8,9];
function odev(sayi){

const tekElemanliDizi=sayi.filter(function(sayi){
        return sayi%2!==0;
    }

)
console.log(tekElemanliDizi);

const baskaBirDizi=tekElemanliDizi.map(function(sayi){
    return sayi*sayi;
})


console.log(baskaBirDizi);
const sonuc=baskaBirDizi.reduce(function(pre,oAnkiEleman){

if(oAnkiEleman>10){
    return pre+oAnkiEleman;
}
else{
    return pre;
}
},0)
console.log(sonuc);
}
 odev(sayilar1);
//kısa hali
 function odev(sayi){

    const sonuc= tekElemanliDizi=sayi.filter((sayi)=>sayi%2!==0)
        .map((sayi)=>sayi*sayi).reduce((pre,oAnkiEleman)=>oAnkiEleman>10?(pre+oAnkiEleman):(pre),0)
        console.log(sonuc);
        }
     odev(sayilar1);
    