document.querySelector("#submit-twood").addEventListener("click" , function(){
  const newText = document.querySelector("#twood-input").value
  document.querySelector(".twood").innerText = newText
  document.querySelector("#twood-input").value = ""



  document.createElement("div") = newTwood
  document.querySelector(".twoods-container").append(newTwood)
  newTwood.classList.add("twood")
    // what is innerText?
  newTwood.innerText = newText
})


setTimeout(() => {
    document.querySelector('.cutoff').classList.remove('hidden') 
  }, 3000000)
