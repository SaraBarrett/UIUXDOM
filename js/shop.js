let products = document.querySelectorAll("li");
let myDiv = document.querySelector("div");

function addToCart() {
  //cria um paragrafo novo
  let myP = document.createElement("p");

  //no paragrafo novo, adiciona o texto do elemento onde clicámos (this refere-se ao elemento de onde provém o clique definido abaixo no ciclo)
  myP.textContent = this.innerText;

  //anexa o parágrafo à div do carrinho
  myDiv.appendChild(myP);

  //muda o elemento clicado para a cor laranja
  this.style.backgroundColor = "orange";
}

//através da seleccção de todos os elementos lis, este cicli coloca todos eles à escuta, e sempre que eu clico num deles chama a função addToCart

for (let element of products) {
  element.addEventListener("click", addToCart);
}
