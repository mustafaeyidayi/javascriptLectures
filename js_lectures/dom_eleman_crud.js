const yeniListeElemani = document.createElement('li');

yeniListeElemani.className = 'liste-item';
yeniListeElemani.textContent = 'Yozgat';
yeniListeElemani.id = 'yeni-id';
yeniListeElemani.setAttribute('deger','yeni-deger');

document.querySelector('ul').appendChild(yeniListeElemani);
console.log(yeniListeElemani);

//replace

const yeniKucukBaslik = document.createElement('h6');

yeniKucukBaslik.id = 'h6ID';
yeniKucukBaslik.textContent = 'Yeni Başlık';

const eskiBaslik = document.querySelector('h2');
const baslikParent = document.querySelector('body');
baslikParent.replaceChild(yeniKucukBaslik, eskiBaslik);

//remove 
// const listeItem = document.querySelector('li');
// listeItem.remove();
//document.querySelector('ul').remove();

document.querySelector('ul').removeChild(document.querySelectorAll('li')[3]);

const textBolumu = document.querySelector('input');
document.querySelector('form').removeChild(textBolumu);

//console.log(listeItem);