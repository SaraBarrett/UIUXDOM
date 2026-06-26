//selecção dos elementos
let btnCat = document.querySelector("#cat-fact");
let dogBt = document.querySelector("#dog-image");
let factData = document.querySelector("#response-cat");

//colocar o botão à escuta, à espera que alguém clique
btnCat.addEventListener("click", function () {
  //quando clicado, comunica com a API
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      factData.textContent = data.fact;
    });
});

dogBt.addEventListener("click", function () {
  //quando clicado, comunica com a API
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      if (data.status == "success") {
        //criar elemento imagem
        let myImg = document.createElement("img");


        //colocar na src o caminho que vem da api (se sucesso)
        myImg.src = data.message;

        //anexar ao body
        document.body.appendChild(myImg)
      }
    });
});
