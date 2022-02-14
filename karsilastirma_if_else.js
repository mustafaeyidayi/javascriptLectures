//iften sonra normal parantez ve süslü parantez açmayı unutma else if olursa da yine aynı şekilde.
//else durumu diğer durumlar olmadığında gerçekleşeceginden 
//bir condition parantezi açmaya gerek yok süslü parantez yeterli.
//süslü parantezi tek satırda bir kod yazdığımızda kullanmayız.


let sayi1=25, sayi2=25;
if(sayi1<sayi2){

console.log("sayi1 küçüktür sayi2");

}
else if(sayi1=sayi2){
   
 console.log("sayi1 eşittir sayi2");

}
else{

console.log("sayi1 büyüktür sayi2");

}

let sorgu=true;

if(sorgu){

    //bu kısmı çalıştırırız çünkü ifin condion parantezinin içi true/false analizi yapar.

}

let a=20, b=15, c=0;
if(a>b){
    c=a+b;
}
else{
    c=a-b;
}
console.log("c degeri= "+c);

//ternary operator of if 
//a büyük mü be diye bakıyor dogruysa il yazılan öncül yanlışsa ikinci yazılanı baz alıyor.

c=(a>b)?(a+b):(a-b)
console.log("c degeri= "+c);