// let inputValue = document.querySelector("#twood-input").value;



function buttonClick() {
  let twoodText = document.querySelector("#twood-input").value;
  document.querySelector(".twood").innerHTML = twoodText;
  document.querySelector("#twood-input").value = "";
}

document.querySelector("#submit-twood").addEventListener("click", buttonClick);


function removeHid() {
  var hidVar = document.querySelector(".cutoff");
  hidVar.classList.remove('hidden');
}

// removeHid();


function timeSet() {
  setTimeout(function(){removeHid();}, 3000);
}

timeSet()