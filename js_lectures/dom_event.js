/*// document.querySelector('.link').addEventListener('click',tiklanma);
// document.querySelector('.link').addEventListener('dblclick',tiklanma);

// document.querySelector('.link').addEventListener('mousedown',tiklanma);//basılı tutma
// document.querySelector('.link').addEventListener('mouseup',tiklanma);//çektiğimizde

// document.querySelector('.container').addEventListener('mouseenter',tiklanma);//mouse üzerine geldiğinde veya çekipip tekrar üzerine geldiğinde
// document.querySelector('.container').addEventListener('mouseleave',tiklanma);//ayrıldığımızda

// document.querySelector('.container').addEventListener('mouseover',arkaPlanRengiDegistir);//containerin içine girdikten sonra başka bir evete girip çıkınca da çalışır
// document.querySelector('.container').addEventListener('mouseout',tiklanma);
document.querySelector('.container').addEventListener('mousemove',arkaPlanRengiDegistir);//hareket ettikçe fonksiyon tektiklenir.


function tiklanma(e){
let deger;

deger=e.type;
console.log(deger);
e.preventDefault();//sonrasında gerçekleşek eventi engeller yani o linke gitmeyi engelledi.

}
function arkaPlanRengiDegistir(e){
document.querySelector('.yazi').textContent=`${e.clientX}, ${e.clientY}`;
document.querySelector('.container').style.backgroundColor=`rgb(${e.clientX},${e.clientY},200`;
}
*/

//klavye eventleri
const myForm=document.querySelector('#form');
const isim=document.querySelector('#ad');
const sehirler=document.querySelector('#sehir')
myForm.addEventListener('submit',eventiYakala);
// isim.addEventListener('keydown',eventiYakala);//herhangi bir tuşa basınca
// isim.addEventListener('keydoup',eventiYakala);//çekince
// isim.addEventListener('keypress',eventiYakala);//basıp çekince
// isim.addEventListener('focus',eventiYakala);//o yazı kutucugunun içine girince (yazmaya fokus)
// isim.addEventListener('blur',eventiYakala);//submit kutusunudan  çıkınca
// isim.addEventListener('cut',eventiYakala);//içinden birşey kestiğimizdeisim.addEventListener('keydown',eventiYakala);
// isim.addEventListener('paste',eventiYakala);
isim.addEventListener('input',eventiYakala);//yukardakilerden herhangi biri tetiklenince(focus haric)
sehirler.addEventListener('change',eventiYakala);

function eventiYakala(e) {
console.log(e.target.value);

console.log('Event adı: '+e.type);
e.preventDefault();    
}