const bitkiler=[
    {id:1,tur:'meyve'},
    {id:2,tur:'sebze'},
    {id:3,tur:'egzotik'},
    {id:4,tur:'ağaç'}
    ];
const sonuc=bitkiler.find((kisi)=>kisi.id===2)
console.log(sonuc);
//higher order ile find metodu
function kendiFindMetodum(aranilacakDizi,aranilanDeger){
    let bulunanEleman=[];
    for(let i=0;i<aranilacakDizi.length;i++){
        if(aranilanDeger(aranilacakDizi[i])){
         bulunanEleman.push(aranilacakDizi[i]);
        }

    }
   return bulunanEleman;
}
const sonuc2=kendiFindMetodum(bitkiler,(bitki)=>bitki.id===1);
console.log(sonuc2);