// const myPromise = new Promise((resolve,reject)=>{

//     //uzun sürecek işlem buraya yazılır
//     setTimeout(() => {
//        // resolve('3 saniyelik işlem bitti');
//        //resolve({ad:'mustafa',soyAd:'dayi'});
//        reject('internete çıkamadım')
//     }, 3000);
// })
// myPromise
// .then(sonuc=>{console.log(sonuc);})//uzun süren işlemden sonra degeri al bişeyler yap.
// .catch(hata=>{console.log(hata);});






// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(function () {
//         const dizi=[];
//         for(let i=0;i<300;i++){
//             dizi.push({ad:'öğrenci'+(i+1),id:i });
//         }
//        resolve(dizi);
//     },3000)
    
// })
// myPromise.then(sonuc=>{console.log(sonuc);})




// const promiseBasarili=Promise.resolve('başarılı promise');
// const promiseHata=Promise.reject('hata var');
// promiseBasarili.then(snc=>{console.log(snc);})
// promiseHata.catch(snc=>console.log(snc))


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('3 saniyelik işlem bitti')
//     },3000)

// });


// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('6 saniyelik işlem bitti')
//     },6000)

// });

// // Promise.all([p1,p2]).then(snc=>{console.log(snc);});
// Promise.race([p1,p2]).then(snc=>{console.log(snc);});//hangi işlem daha önce biterse onu verir.




function getUser(id){
    console.log(`${id} idili kullanıcının bilgisi getiriliyor`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({ad:'mustafa',id:id})

        },2000)
    })
}

function getCourses(userName){
    console.log(`${userName} adlı kullanıcının bilgisi getiriliyor`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['java','js','flutter'])

        },2000)
    })

}

function getComment(kursAdi){
    console.log(`${kursAdi} kursunun yorumları getiriliyor`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('harika bir kurs')

        },2000)
    })
}


// getUser(12345).then(user=>{getCourses(user.ad).then(kurslarDizisi=>
//     {getComment(kurslarDizisi[0]).then(yorum=>console.log(yorum))})})

// getUser(12345)
//     .then(user => getCourses(user.ad))
//     .then(kurslarDizisi => getComment(kurslarDizisi[2]))
//     .then(yorum => console.log(yorum));


async function yorumlarıGoster(){
   try {
    const user=await getUser(12345);
    const course=await getCourses(user.ad);
    const yorum=await getComment(course[0]);
    console.log(yorum);
       
   } catch (error) {
       console.log('hata cıktı'+error);
   }
    
}
yorumlarıGoster();