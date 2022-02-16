const bitkiler=[
{ad:'üzüm',tur:'meyve'},
{ad:'elma',tur:'meyve'},
{ad:'maydonoz',tur:'sebze'},
{ad:'sarmaşık',tur:'egzotik'},
{ad:'ladin',tur:'ağaç'}
];
function meyveleriBul(dizi){
const geciciDizi=[];
for(let i=0;i<dizi.length;i++){
if(dizi[i].tur === "meyve"){
    geciciDizi.push(bitkiler[i].ad);
}
}
return geciciDizi;
}
function sebzeleriBul(dizi){
    const geciciDizi=[];
    for(let i=0;i<dizi.length;i++){
    if(dizi[i].tur === "sebze"){
        geciciDizi.push(bitkiler[i].ad);
    }
    }
    return geciciDizi;
}

console.log(meyveleriBul(bitkiler));
console.log(sebzeleriBul(bitkiler));

//filter fonksiyonu ile yapmak istersek
const meyveler=bitkiler.filter(function(bitki){
    return bitki.tur==="meyve";
})
console.log(meyveler);
console.log("**********");


//kendi filtre yapım 
function kendiFiltreYapim (dizi,filtreSarti){
    const geciciDizi=[];
for(let i=0;i<dizi.length;i++){
const sonuc=filtreSarti(dizi[i],'ağaç');
    if(sonuc){
        geciciDizi.push(dizi[i]);
    }
}
    return geciciDizi;
}
function filtre(bitki,index){
   if(index==='meyve'){
       return bitki.tur==="meyve";
   }
   else if(index==='sebze'){
       return bitki.tur==="sebze";
   }
   else if(index==='egzotik'){
        return bitki.tur==="egzotik";
}else{
    return bitki.tur==="ağaç"
}
   
}
const meyvelerDizisi=kendiFiltreYapim(bitkiler,filtre);
console.log(meyvelerDizisi);