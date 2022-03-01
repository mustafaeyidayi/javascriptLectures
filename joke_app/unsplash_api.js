class UnsplashApi {

    constructor() {
        this.baseURL = 'https://api.unsplash.com',
        this.clientID='Client-ID SE8pZ4FjiGFkxpOg5xAe_sXtIslLZZ8ivb2sB1vDihU',
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers:{
                Authorization: this.clientID
            },
            params:{
                query:'smile',
                count:1
            }
            })
    }

    async getRandomImage() {
        try {
            
            const imageResponse = await this.axiosNesne.get('/photos/random');
            console.log(imageResponse.data[0].links.download);
            return imageResponse.data[0].links.download;
        } catch (error) {
            console.log(error);
            return 'https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg';
        }
    }

}
export default function image(){
    const comingImage=  new UnsplashApi().getRandomImage();
    return comingImage;

}