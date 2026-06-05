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
