let products = document.querySelectorAll("li");
let myDiv = document.querySelector("div");

console.log(products);
function addToCart() {
  let myP = document.createElement("p");
  myP.textContent = this.innerText;

  myDiv.appendChild(myP);
  this.style.backgroundColor = "orange";
}

for (let element of products) {
  element.addEventListener("click", addToCart);
}
