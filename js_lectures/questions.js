// Question 1:


const sehirler=[
    {sehir:'Karaman',plakaNo:70,nufus:100000},
    {sehir:'Ankara',plakaNo:06,nufus:1000000},
    {sehir:'Antalya',plakaNo:07,nufus:750000},
    {sehir:'Mersin',plakaNo:33,nufus:500000}
];
const sehirSirali=sehirler.sort(function (a,b) {
    return (a.sehir<b.sehir)?+1:(a.sehir>b.sehir)?-1:0;
    
});
console.log(sehirSirali);

//question 2:
let kullaniciDeger=10//prompt("BİR DEĞER GİRİNİZ");
let geciciArray=[];
for(let i=0;i<kullaniciDeger;i++){
    geciciArray[i]=1;
}    
let bos=[];


const fibonacci=geciciArray.reduce(function(pre,oAnkiEleman,i) {
 
  
    if(i<=1)
    pre.push(i);
    if(i>1 && (pre[i-2]+pre[i-1])<kullaniciDeger) {   
    pre.push(pre[i-2]+pre[i-1]);
    
    }
      
 
return pre;
},[])
console.log(fibonacci);

//QUESTİON 3
const ogrenciler=[
    {id:12,isim:'emre',soyAd:'karabacak'},
    {id:21,isim:'hasan',soyAd:'karaburun'},
    {id:32,isim:'fatma',soyAd:'karagöz'},
    {id:13,isim:'nuriye',soyAd:'karakaş'},
    {id:92,isim:'kemal',soyAd:'karasaç'},
    {id:15,isim:'mustafa',soyAd:'karataş'},
    {id:44,isim:'seher',soyAd:'karadiş'},
    {id:36,isim:'alperen',soyAd:'karakulak'}
];

const siralanmis=ogrenciler.filter((sayi)=>sayi.id%2===0).map((isim)=>isim.isim+" "+isim.soyAd).sort();
console.log(siralanmis);