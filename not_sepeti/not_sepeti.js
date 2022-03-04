const yeniGorev = document.querySelector(".input-gorev");
const yeniGorevEkleBtn = document.querySelector(".btn-gorev-ekle");
const gorevListesi = document.querySelector(".gorev-listesi");
document.addEventListener('DOMContentLoaded', localStorageOku);
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
        if (confirm('Emin misiniz?')) {
            tiklanilanEleman.parentElement.classList.toggle('kaybol');
            const silinecekGorev = tiklanilanEleman.parentElement.children[0].innerText;
            localStorageSil(silinecekGorev);

            tiklanilanEleman.parentElement.addEventListener('transitioned', () => {
                tiklanilanEleman.parentElement.remove();
            })
        }


    }
}
function gorevEkle(e) {
    e.preventDefault();
    if (yeniGorev.value.length > 0) {
        gorevItemOlustur(yeniGorev.value);
        localStorageKaydet(yeniGorev.value);
        yeniGorev.value = '';
    } else {
        alert('Boş not oluşturulamaz');
    }

}
function localStorageKaydet(yeniGorev) {
    let gorevler = localStorageArray();
    gorevler.push(yeniGorev);
    localStorage.setItem('gorevler', JSON.stringify(gorevler));

}
function localStorageOku() {
    let gorevler = localStorageArray();
    gorevler.forEach(gorev => {
        gorevItemOlustur(gorev);
    });
}
function gorevItemOlustur(gorev) {
    //div oluşturma 
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    //li oluşturma
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = gorev;
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
}
function localStorageSil(gorev) {
    let gorevler = localStorageArray();
    //splice ile arrayden eleman silme
    const siinecekElemanIndex = gorevler.indexOf(gorev);
    gorevler.splice(siinecekElemanIndex, 1);

    localStorage.setItem('gorevler', JSON.stringify(gorevler));
}
function localStorageArray() {
    let gorevler;
    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }
    return gorevler;
}