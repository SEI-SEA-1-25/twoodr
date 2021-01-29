

//console.log(textField);

const button = document.getElementById("submit-twood");
//console.log(button)


button.addEventListener('click', function(){
  let textField = document.getElementById("twood-input").value;
  let userInput = document.querySelector(".twood");
  userInput.innerText = textField
  console.log(userInput)
})
  
var message = setTimeout(function(){
  var test = document.querySelector(".cutoff");
  test.classList.remove(".hidden");
  console.log(test)
}, 800);






//document.addEventListener("click", buttonClick());

// function myFunction() {
//   var x = document.getElementById("myBtn");
//   x.disabled = true;