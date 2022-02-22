//arayüz elemetlerini değişkenlere atama 
const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const mail = document.getElementById('mail');
const form = document.getElementById('form-rehber');
const kisiListesi = document.querySelector('.kisi-listesi');

form.addEventListener('submit', kaydet);
kisiListesi.addEventListener('click', kisiIslemleriniYap);

//tüm kisiler için dizi
const tumKisilerDizisi = [];
let secilenSatir = undefined;

function kaydet(e) {
    e.preventDefault();
    const eklenecekVeyaGüncellenecekKisi = {
        ad: ad.value,
        soyad: soyad.value,
        mail: mail.value,
    }
    console.log(eklenecekVeyaGüncellenecekKisi);

    const sonuc = verileriKontrolEt(eklenecekVeyaGüncellenecekKisi);
    if (sonuc.durum) {
        if (secilenSatir) {
           kisiyiGuncelle(eklenecekVeyaGüncellenecekKisi);
        } else {
            kisiyiEkle(eklenecekVeyaGüncellenecekKisi);
        }
    } else {
        bilgiOlustur(sonuc.mesaj, sonuc.durum)
        
    }
}
function verileriKontrolEt(kisi) {
    //objelerde in kullanımı
    for (const deger in kisi) {
        if (kisi[deger]) {

        } else {
            const sonuc = {
                durum: false,
                mesaj: 'Boş alan bırakmayınız'
            }
            return sonuc;
        }
    }
    alanlarıTemizle();
    return {
        durum: true,
        mesaj: 'kaydedildi.'
    }
}
function bilgiOlustur(mesaj, durum) {
    const olusturulanBilgi = document.createElement('div');
    olusturulanBilgi.textContent = mesaj;
    olusturulanBilgi.className = 'bilgi';
    // if(durum){
    //     olusturulanBilgi.classList.add('bilgi--success');
    // }else{
    //     olusturulanBilgi.classList.add('bilgi--error');
    // }
    olusturulanBilgi.classList.add(durum ? 'bilgi--success' : 'bilgi--error');
    document.querySelector('.container').insertBefore(olusturulanBilgi, form);
    setTimeout(function () {
        const silinecekDiv = document.querySelector('.bilgi');
        if (silinecekDiv) {
            silinecekDiv.remove();
        }
    }, 1500)


}
function alanlarıTemizle() {
    ad.value = '';
    soyad.value = '';
    mail.value = '';
}
function kisiyiEkle(eklenecekKisi) {
    const olusturulanTrElement = document.createElement('tr');
    olusturulanTrElement.innerHTML = ` <td>${eklenecekKisi.ad}</td>
<td>${eklenecekKisi.soyad}</td>
<td>${eklenecekKisi.mail}</td>
<td>
    <button class="btn btn--edit">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="btn btn--delete">
        <i class="fa-solid fa-trash-can"></i>
    </button>                       
    
</td>`;
    kisiListesi.appendChild(olusturulanTrElement);
    tumKisilerDizisi.push(eklenecekKisi);
    bilgiOlustur('kisi rehbere kaydedildi', true);
}
function kisiIslemleriniYap(e) {
    const tiklanilanEleman = e.target;
    const silinecekTr = tiklanilanEleman.parentElement.parentElement
    const silinecekMail = tiklanilanEleman.parentElement.previousElementSibling.textContent;
    if (tiklanilanEleman.classList.contains('btn--delete')) {
        rehberdenSil(silinecekTr, silinecekMail);
    }
    else if (tiklanilanEleman.classList.contains('btn--edit')) {
        document.querySelector('.kaydetGuncelle').value='Güncelle';
        const secilenTR =tiklanilanEleman.parentElement.parentElement;
        const guncellenecekMail=secilenTR.cells[2].textContent;
        
        ad.value=secilenTR.cells[0].textContent;
        soyad.value=secilenTR.cells[1].textContent;
        mail.value=secilenTR.cells[2].textContent;

        secilenSatir=secilenTR;



    }

}
function rehberdenSil(silinecekTrElement, silinecekMail) {
    silinecekTrElement.remove();
    //maile göre silme işlemi
    /* tumKisilerDizisi.forEach(function (kisi,index) {
         if(kisi.mail==silinecekMail){
             tumKisilerDizisi.splice(index,1)
         }
     })
 
 }*/
    const silinmeyecekler = tumKisilerDizisi.filter(function (kisi, index) {
        return kisi.mail !== silinecekMail;
    })
    //console.log(silinmeyecekler);
    tumKisilerDizisi.length = 0;
    tumKisilerDizisi.push(...silinmeyecekler);
   alanlarıTemizle();
   document.querySelector('.kaydetGuncelle').value='kaydet';

}
function kisiyiGuncelle(kisi){
    secilenSatir.cells[0].textContent=kisi.ad;
    secilenSatir.cells[1].textContent=kisi.soyad;
    secilenSatir.cells[2].textContent=kisi.mail;
    document.querySelector('.kaydetGuncelle').value='kaydet';
    secilenSatir=undefined;
}


