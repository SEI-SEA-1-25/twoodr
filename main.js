const button = document.getElementById("submit-twood")
button.addEventListener('click', function(){
  let textField = document.getElementById("twood-input").value;
  //let userInput = document.querySelector(".twood");
  //userInput.innerText = textField;
  newText = document.createElement("div");
  let parent = document.querySelector(".twoods-container");
  newText.className = "twood"
  newText.innerText = textField;
  parent.append(newText);
});
  
// var message = setTimeout(function(){
//   var test = document.querySelector(".cutoff");
//   test.classList.remove("hidden");
// }, 1000)

