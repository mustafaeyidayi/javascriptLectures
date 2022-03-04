// console.log('Start');
// setTimeout(function(){
// console.log('waited 5 seconds');
// },5000)
// setTimeout(function(){
//     console.log('0 scnd waited');
// },0);

// console.log('finish');

// console.log('başladı');
// const dizi=ogrencileriGetir();
// ogrencileriYazdır(dizi);
// console.log('bitti');
// function ogrencileriGetir() {
//     setTimeout(function () {
//         const dizi=[];
//         for(let i=0;i<300;i++){
//             dizi.push({ad:'öğrenci'+(i+1),id:i });
//         }
//         return dizi;
//     },3000)
    
// }
// function ogrencileriYazdır(ogrenciler){
//     console.log(dizi);
//}
//yukarıdaki gibi yaptığımızda yani settimeout tan değeri beklemeden işlem yaptığımıda 
//return dönmeden kod okunur ve biter böylece undefined değerini alırız.
//bu durumdan kurtulmak için:


console.log('başladı');
ogrencileriGetir(ogrencileriYazdır);

console.log('bitti');
function ogrencileriGetir(callback) {
    setTimeout(function () {
        const dizi=[];
        for(let i=0;i<300;i++){
            dizi.push({ad:'öğrenci'+(i+1),id:i });
        }
       callback(dizi);
    },3000)
    
}
function ogrencileriYazdır(ogrenciler){
    console.log(ogrenciler);
}