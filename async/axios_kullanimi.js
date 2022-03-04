

const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const deleteBtn = document.getElementById('delete');
const ayniAndaIstekBtn = document.getElementById('ayni-anda-istek');
const headersBtn = document.getElementById('headers');
const hataBtn = document.getElementById('hata');

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);
deleteBtn.addEventListener('click', deleteItem);
ayniAndaIstekBtn.addEventListener('click', ayniAndaIstekData);
headersBtn.addEventListener('click', customHeader);
hataBtn.addEventListener('click', hataIslemleri)

function getData() {
    ////genel axios kullanımı
    // axios({
    //     method:'GET',
    //     url:'https://jsonplaceholder.typicode.com/users',
    //     params:{
    //         _limit:2
    //     }
    // }).then(response=>sonucuEkranaYazdir(response))
    // .catch(hata=>console.log(hata))
    // .then(()=>console.log('get istegi tamamlandı'))
    //option 2
    // axios
    //     .get('https://jsonplaceholder.typicode.com/users',{
    //         params:{
    //             _limit:1,
    //         }
    //     }).then(response=>sonucuEkranaYazdir(response))
    //     .catch(hata=>console.log(hata))
    //     .then(()=>console.log('get istegi tamamlandı'))
    //option 3
    axios
        .get('https://jsonplaceholder.typicode.com/users?_limit=1').then(response=>sonucuEkranaYazdir(response))
        .catch(hata=>console.log(hata))
        .then(()=>console.log('get istegi tamamlandı'))
}
function postData() {
    // axios.post('https://jsonplaceholder.typicode.com/posts',{
    //     title:'Yeni baslık',
    //     body:'burası body kısmı',
    //     userId:55
    // }).then(response=>sonucuEkranaYazdir(response))
    // .catch(hata=>console.log(hata))

    axios.post('https://jsonplaceholder.typicode.com/users',{
        name:'mustafa eyidayı',
        username:'mstfdy'
    }).then(response=>sonucuEkranaYazdir(response))
    .catch(hata=>console.log(hata))
}

function putPatchData() {
   //put tüm veriyi kaynagından siler yenisini yükler
   //patch verinin üzerinde değiştirme işlemi gercekleştirir,veri kaynagını silmez.
//    axios.put('https://jsonplaceholder.typicode.com/users/1',{
//     name:'mustafa eyidayı',
//     username:'mstfdy'
//    }).then(response=>sonucuEkranaYazdir(response))
//    .catch(hata=>console.log(hata))
axios.patch('https://jsonplaceholder.typicode.com/users/2',{
    name:'mustafa eyidayı',
    username:'mstfdy'
   }).then(response=>sonucuEkranaYazdir(response))
   .catch(hata=>console.log(hata))
}

function deleteItem() {
    axios.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(response=>sonucuEkranaYazdir(response))
    .catch(hata=>console.log(hata))
}

function ayniAndaIstekData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/todos')
    ]).then(response=>sonucuEkranaYazdir(response[1]))
    .catch(hata=>console.log(hata))
    
}

axios.defaults.headers.common['x-Auth-Token']='apitokendegeri';
const axiosNesnesi=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
        'X-Requested-With':'XMLHttpRequest',
        'token':'token1994'
    }
})
function customHeader() {
    
    const config={
        headers:{
            'Content-Type':'application/json',
            Autorization:'sizintokendegeriniz'
        }
    }
    axios.post('https://jsonplaceholder.typicode.com/users',{
        name:'mustafa eyidayı',
        username:'mstfdy'
    },config).then(response=>sonucuEkranaYazdir(response))
    .catch(hata=>console.log(hata))
    
}
function hataIslemleri() {
    axios
        .get('https://jsonplaceholder.typicode.com/usersss?_limit=1')
        .then(response=>sonucuEkranaYazdir(response))
        .catch(hata=>hatayiYazdir(hata))
        .then(()=>console.log('get istegi tamamlandı'))
   
}

function hatayiYazdir(hata) {
   
    document.querySelector('.sonuc').innerHTML = ` <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
        <div class="column"><h1 class="subtitle">Sonuc</h1></div>
        <div class="column"><h1 class="title">
        <pre>${JSON.stringify(hata.response.status, null, 2)}</pre>
        </h1></div>
    </div>
    </div>`;
}

function sonucuEkranaYazdir(response) {
    document.querySelector('.sonuc').innerHTML = `
    <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
        <div class="column"><h1 class="subtitle">Sonuc</h1></div>
        <div class="column"><h1 class="title">${response.status}</h1></div>
    </div>
    </div>



    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Header</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.headers, null, 4)}</pre>
            </div>
        </article>
    </div>


    <div class="section">
        <article class="message is-warning">
            <div class="message-header">
                <p>Data</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.data, null, 4)}</pre>
            </div>
        </article>
    </div>


    <div class="section">
        <article class="message is-primary">
            <div class="message-header">
                <p>Config</p>

            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.config, null, 4)}</pre>
            </div>
        </article>
    </div>`;
}


