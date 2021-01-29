// let inputValue = document.querySelector("#twood-input").value;



function buttonClick() {
  let twoodText = document.querySelector("#twood-input").value;
  let twoodBox = document.createElement("div");
  let divParent = document.querySelector(".twoods-container");
  divParent.append(twoodBox);
  twoodBox.classList.add("newDiv");
  twoodBox.innerText = twoodText;
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

// timeSet()