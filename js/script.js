let myBanner = document.getElementById("banner");
console.log(myBanner);

//passo 1: seleccionar
let myH1 = document.querySelector("h1");
console.log(myH1);

function changeLang() {
    if(myH1.innerText == 'Silkie Chickens'){
    //passo 2: manipular o texto
    myH1.innerText = "Galinhas Sedosas";
    }else{
        myH1.innerText = "Silkie Chickens";
    }


}
