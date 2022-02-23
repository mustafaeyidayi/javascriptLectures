document.addEventListener('DOMContentLoaded', function () {
    const ekran = new Ekran();
})
class Ekran {

    constructor() {
        this.ad = document.getElementById('ad');
        this.soyad = document.getElementById('soyad');
        this.mail = document.getElementById('mail');
        this.form = document.getElementById('form-rehber').addEventListener('submit', this.kaydetGuncelle.bind(this));
        this.kisiListesi = document.querySelector('.kisi-listesi');
        this.kisiListesi.addEventListener('click',this.guncelleVeyaSil.bind(this));
        this.ekleGuncelleBtn = document.querySelector('.kaydetGuncelle');
        this.depo = new Depo();
        this.secilenSatir=undefined;
        this.kisileriEkranaYazdir();



    }
    guncelleVeyaSil(e){
        if(e.target.classList.contains('btn--delete')){
            this.secilenSatir=e.target.parentElement.parentElement;
            this.depo.kisiSil(this.secilenSatir.cells[2].textContent);
            this.ekrandanSil(this.secilenSatir);
            this.alanlarıTemizle();
        }
        else if(e.target.classList.contains('btn--edit')){
            this.secilenSatir=e.target.parentElement.parentElement;
           this.ekleGuncelleBtn.value='Güncelle';
         this.ad.value=this.secilenSatir.cells[0].textContent;
         this.soyad.value=this.secilenSatir.cells[1].textContent;
         this.mail.value=this.secilenSatir.cells[2].textContent;
        }
    }
    kisiyiEkrandaGuncelle(kisi){
        this.depo.kisiGuncelle(kisi, this.secilenSatir.cells[2].textContent);
        this.secilenSatir.cells[0].textContent=kisi.ad;
        this.secilenSatir.cells[1].textContent=kisi.soyad;
        this.secilenSatir.cells[2].textContent=kisi.mail;
        //const guncellenmisKisi=new Kisi(this.secilenSatir.cells[0].textContent, this.secilenSatir.cells[1].textContent, this.secilenSatir.cells[2].textContent)
        this.alanlarıTemizle();
        this.secilenSatir=undefined;
        this.ekleGuncelleBtn.value='kaydet'
        
    }
    alanlarıTemizle(){
        this.ad.value=''
        this.soyad.value=''
        this.mail.value=''
    }
    ekrandanSil(secilenSatir){
        secilenSatir.remove();
        this.secilenSatir=undefined;
    }
    kisileriEkranaYazdir() {
        this.depo.tumKisiler.forEach((kisi) => {
            this.kisiyiEkranaEkle(kisi);
        })
    }
    kisiyiEkranaEkle(kisi) {
        const olusturulanTrElement = document.createElement('tr');
        olusturulanTrElement.innerHTML = ` <td>${kisi.ad}</td>
    <td>${kisi.soyad}</td>
    <td>${kisi.mail}</td>
    <td>
        <button class="btn btn--edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn btn--delete">
            <i class="fa-solid fa-trash-can"></i>
        </button>                       
        
    </td>`;
        this.kisiListesi.appendChild(olusturulanTrElement);
        this.alanlarıTemizle();
    }
    kaydetGuncelle(e) {
        e.preventDefault();
        const kisi = new Kisi(this.ad.value, this.soyad.value, this.mail.value);
        console.log(kisi);
        const sonuc = Util.bosAlanKontrolEt(kisi.ad, kisi.soyad, kisi.mail);
        const emailGecerliMi=Util.emailGecerliMi(this.mail.value);
       if (emailGecerliMi) {
        if (sonuc) {
            if (this.secilenSatir) {
                this.kisiyiEkrandaGuncelle(kisi);
                
               
            } else {
            this.depo.kisileriEkle(kisi);
            this.kisiyiEkranaEkle(kisi);
            }
            
        } else {
            console.log('bos alan bırakmayınız');
        }
       }
        
        

    }
}
class Kisi {

    constructor(ad, soyad, mail) {

        this.ad = ad;
        this.soyad = soyad;
        this.mail = mail;


    }

}
class Depo {
    //uygulama ilk açıldığında veriler getirilir.

    constructor() {
        this.tumKisiler = this.kisileriGetir();
    }
   
    kisileriGetir() {
        let tumKisilerLocal;
        if (localStorage.getItem('tumKisiler') === null) {
            tumKisilerLocal = [];
        } else {
            tumKisilerLocal = JSON.parse(localStorage.getItem('tumKisiler'));
        }
        return tumKisilerLocal;
    }
    kisileriEkle(kisi) {
        this.tumKisiler.push(kisi);
        localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
              
    }
    kisiSil(mail) {

        this.tumKisiler.forEach((kisi,index)=> {
            if (kisi.mail === mail) {
                this.tumKisiler.splice(index,1);
            }
        });
        localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
    }
    kisiGuncelle(guncellenmisKisi,mail){
    this.tumKisiler.forEach((kisi,index)=> {
        if (kisi.mail === mail) {
            this.tumKisiler[index]=guncellenmisKisi;
        }
    });
    localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
    }
}
class Util {
    static bosAlanKontrolEt(...alanlar) {
        let sonuc = true;
        alanlar.forEach(alan => {
            if (alan.length === 0) {
                sonuc = false;
                return false;
            }

        })
        return sonuc;
    }
    static emailGecerliMi(mail){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
          return (true);
        }else{
          alert("You have entered an invalid email address!")
          return (false);
        }
        }
        
    
    
}