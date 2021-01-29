////////////////////////////////////////////////////////
////// Section 1/////////////////////////////////////
///////////////////////////////////////////////////

// const twoodButton = document.querySelector('#submit-twood');
// twoodButton.addEventListener('click',sendTwood);

// function sendTwood(){
//   // getText()
//   const txtInputButton = document.querySelector('#twood-input');
//   const txt = txtInputButton.value;
//   console.log(txt);
//   if(txt === ''){
//   alert('Please enter some text');
//   } else{

//     // overwriteExistingText

//     displayText = document.querySelector('.twood');
//     displayText.innerText = txt;
//   }

// }


////////////////////////////////////////////////////////
////// Section 2/////////////////////////////////////
///////////////////////////////////////////////////

// identify the web element we want to modify and assign it to a javascript variable
// add a timeout (like a listener)
// write a function to modify the web element in the way we want

// chain the function to the listener

//webElement.removeAttribute("display");


const webElement = document.querySelector(".cutoff");

function makeWebElementVisible(){
  webElement.classList.remove("hidden");
}

setTimeout(function(){ makeWebElementVisible(); }, 20000);


////////////////////////////////////////////////////////
////// Section 3/////////////////////////////////////
///////////////////////////////////////////////////

const twoodButton = document.querySelector('#submit-twood');
//identify button 

twoodButton.addEventListener('click',sendTwood);
//listens to the button, when it's clicked, runs sendTwood

twoodToDelete = document.querySelector('.twood');
twoodToDelete.remove();

function sendTwood(){
  // finds the input box
  const txtInputButton = document.querySelector('#twood-input');
  // reads the text that the user has put in the input box
  const txt = txtInputButton.value;
  //finds the element that displays the twood
    if(txt === ''){
   alert('Please enter some text');
   } else{
const sentTwood = document.createElement("div")
sentTwood.className = "twood";
console.log(sentTwood);
sentTwood.innerText = txt;

const container = document.querySelector('.twoods-container')
container.appendChild(sentTwood);
   }

}

// const txt1 = 'ya'

// const sentTwood = document.createElement("div")
// sentTwood.className = "twood";
// console.log(sentTwood);
// sentTwood.innerText = txt1;

// const container = document.querySelector('.twoods-container')
// container.appendChild(sentTwood);

