import joke from "./joke_api.js";
import image from "./unsplash_api.js";

class App{
constructor() {
    this.sakaGetirBtn=document.querySelector('.saka-getir-button')
    this.sakaGetirBtn.addEventListener('click',this.getJoke.bind(this))


}

async getJoke(){
const randomImage=await image();
const randomJoke= await joke();
const allResults={
    randomImage:randomImage,
    randomJoke:randomJoke
}
this.writeTheResult(allResults);
}

writeTheResult(Results){
    document.querySelector('.sonuc').innerHTML=`<div class="card">
    <div class="card-image">
        <figure class="image is-16by9">
            <img src="${Results.randomImage}" alt="Placeholder image">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-6 has-text-danger">${Results.randomJoke}</p>
            </div>
        </div>
    </div>    
</div>`
}
}

export default function app(){
   new App();
    
}