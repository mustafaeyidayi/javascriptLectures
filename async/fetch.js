const btnJsonGetir=document.getElementById('btn--json-getir');
btnJsonGetir.addEventListener('click',getText);


const sonucDiv=document.getElementById('sonuc');
function getText(e){

e.preventDefault();

    // fetch('ogrenci.json').then(snc => snc.json())
    //     .then(response => {
    //         let cikti = '';
    //         response.forEach(ogr => {

    //             cikti += `ögrenci adi ${ogr.ad} id ${ogr.id}`
    //         })
    //         sonucDiv.innerText = cikti;
    //     })
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(sonuc=>ekranaYazdır(sonuc))

    
}
function ekranaYazdır(data) {
    let cikti='';
    data.forEach(element => {
        cikti+=`<li>${element.name}</li>`
    });
    sonucDiv.innerHTML=cikti;
}