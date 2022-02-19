const yeniGorev = document.querySelector(".input-gorev");
const yeniGorevEkleBtn = document.querySelector(".btn-gorev-ekle");
const gorevListesi = document.querySelector(".gorev-listesi");

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);
function gorevSilTamamla(e) {
    const tiklanilanEleman = e.target;
    if (tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')) {
        console.log('check tıklandı');
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
    }
    if (tiklanilanEleman.classList.contains('gorev-btn-sil')) {
        console.log('sil tıklandı');
        tiklanilanEleman.parentElement.classList.toggle('kaybol');

        tiklanilanEleman.parentElement.addEventListener('transitioned', () => {
            tiklanilanEleman.parentElement.remove();
        })

    }

}

function gorevEkle(e) {
    e.preventDefault();

    //div oluşturma 
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    //li oluşturma
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = yeniGorev.value;
    gorevDiv.appendChild(gorevLi);


    //ul ye oluşturduğumuz divi ekleyelim
    gorevListesi.appendChild(gorevDiv);

    //tamamlandı butonu ekle
    const gorevTamambtn = document.createElement('button');
    gorevTamambtn.classList.add('gorev-btn');
    gorevTamambtn.classList.add('gorev-btn-tamamlandi');
    gorevTamambtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    gorevDiv.appendChild(gorevTamambtn);

    //si butonu ekle
    const gorevSilbtn = document.createElement('button');
    gorevSilbtn.classList.add('gorev-btn');
    gorevSilbtn.classList.add('gorev-btn-sil');
    gorevSilbtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    gorevDiv.appendChild(gorevSilbtn);

    yeniGorev.value = '';
}