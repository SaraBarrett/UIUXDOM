let myBanner = document.getElementById("banner");
console.log(myBanner);

//passo 1: seleccionar
let myH1 = document.querySelector("h1");
console.log(myH1);

function changeLang() {
  if (myH1.innerText == "Silkie Chickens") {
    //passo 2: manipular o texto
    myH1.innerText = "Galinhas Sedosas";
  } else {
    myH1.innerText = "Silkie Chickens";
  }
}

function changeImage() {
  //manipular atributos: src das imagens
  let leopardoImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqbrPUC-tCEehGDveHoEaWiGxgp9XKJOM0arugDS2sQX6plg-qPeg66ph2DhPItCifrtaFwD9qRgtVMA3iI8N7CTQ4-IiKU9Nl-zHpmSO&s=10";
  let chickenImg =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";

  if (myBanner.src == leopardoImg) {
    myBanner.src = chickenImg;
  } else {
    myBanner.src = leopardoImg;
  }
}

function changeStyle() {
  //selecção
  let myP = document.querySelector("h2+p");


  //manipylação de estilo
  myP.style.backgroundColor = 'green'; 
  myP.style.color = 'white';
}
