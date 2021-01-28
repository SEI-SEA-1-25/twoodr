// let inputValue = document.querySelector("#twood-input").value;



function buttonClick() {
  let twoodText = document.querySelector("#twood-input").value;
  document.querySelector(".twood").innerHTML = twoodText;
  document.querySelector("#twood-input").value = "";
}

document.querySelector("#submit-twood").addEventListener("click", buttonClick);
