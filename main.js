document.querySelector('#submit-twood').addEventListener('click', ()=>{
  // console.log('button clicked')
  
  //saving text
  const newTwood = document.querySelector('#twood-input').value
  // console.log(newTwood)
// document.querySelector(".twood").innerText = newTwood
  //clearing text
  document.querySelector('#twood-input').value = ''


  //Display New Twood
  const display = document.createElement('div')
  document.querySelector('.twoods-container').append(display)
  display.classList.add('twood')
  display.innerText = newTwood
  // document.getElementById(".twood").innerText = newTwood;
  // const display = document.querySelector('.twood').value = newTwood
})
const  timesUp = document.querySelector('.hidden')
// console.log(timesUp.classList)

setTimeout(function(){
  timesUp.classList.remove('hidden'); }, 3000);
