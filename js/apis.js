//selecção dos elementos
let btnCat = document.querySelector("#cat-fact");
let dogBt = document.querySelector("#dog-image");
let factData = document.querySelector("#response-cat");
let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");

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
        document.body.appendChild(myImg);
      }
    });
});

//LOGIN: se tiver armazenado a chave user no localStorage, diz olá user, se não lança um prompt a perguntar o nome
loginBtn.addEventListener("click", function () {
  if (localStorage.getItem("user")) {
    alert("Olá " + localStorage.getItem("user"));
  } else {
    //perguntar ao user o nome e colocar a resposta no local storage na chave user
    let userName = prompt("qual é o teu nome?");
    localStorage.setItem("user", userName);
  }
});

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("user");
});
