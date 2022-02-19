 //local ve session storage
localStorage.setItem('ad','mustafa');
 localStorage.setItem('yas',27);

// sessionStorage.setItem('il','ankara');
// console.log(localStorage.getItem('yas'));
// localStorage.clear()
const ulListesi=document.querySelector('.liste');
const isimDizisi=JSON.parse(localStorage.getItem('sayi'));
isimDizisi.forEach(isim => {
    const yeniLi=document.createElement('li');
    yeniLi.textContent= isim;
    ulListesi.appendChild(yeniLi);
    
});



document.querySelector('#form').addEventListener('submit',(e)=>{
    const yeniIsim=document.querySelector('.isim').value;
    let isimDizisi;
if(localStorage.getItem('sayi')===null){
    isimDizisi=[];
}
else{
    isimDizisi=JSON.parse(localStorage.getItem('sayi'))
}

isimDizisi.push(yeniIsim);

localStorage.setItem('sayi',JSON.stringify(isimDizisi))
    
const yeniLi=document.createElement('li');
    yeniLi.textContent=yeniIsim ;
    ulListesi.appendChild(yeniLi);


e.preventDefault();


})

