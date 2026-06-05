//pp 9
let image = document.getElementById("unicorn");
let heading = document.getElementById("mainheading");

console.log(image);
console.log(heading);

//pp 12
let doneTodos = document.querySelectorAll(".done");
let checkbox = document.querySelector("input[name='scales']");

console.log(doneTodos);
console.log(checkbox);

//pp 15
function changeTaste() {
  //seleccionar
  let mySpan = document.querySelector("span");

  //manipular
  if (mySpan.innerText == "Yack") {
    mySpan.innerText = "Yammi";
  } else {
    mySpan.innerText = "Yack";
  }
}

//pp 20
function eggOrChicken() {
  let myImage = document.querySelector("img");
  let chickenImg = "https://devsprouthosting.com/images/chicken.jpg";
  let eggImg = "https://devsprouthosting.com/images/egg.jpg";

  if (myImage.src == chickenImg) {
    myImage.src = eggImg;
  } else {
    myImage.src = chickenImg;
  }
}

//pp 22
function changeStyle() {
  let myContainer = document.querySelector("#container");
  myContainer.style.textAlign = "center";

  let myImg = document.querySelector("img");

  myImg.style.width = "150px";
  myImg.style.borderRadius = "50%";
}
