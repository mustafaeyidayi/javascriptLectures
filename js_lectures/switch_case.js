let haftaninKacinciGunu=prompt("1 ile 7 arasında bir sayı giriniz")
let a=parseInt(haftaninKacinciGunu);//kullanıcdan aldığımız sayıyı integer a çeviriyoruz.
if(a>7 || a<1){

    alert("uygun aralıkta bir sayı giriniz");
}
else{

switch (a) {
    case 1:
        console.log("pazartesi");
        break;
     case 2:
        console.log("salı");
        break;
        case 3:
            console.log("çarşamba");
            break;
            case 4:
                console.log("perşembe");
                break;
                case 5:
                    console.log("cuma");
                    break;
                    case 6:
                        console.log("cumartesi");
                        break;
                     

    default:
        console.log("pazar");
        break;
}

//switch_case kullanırken break kullanmayı unutma!!!


}