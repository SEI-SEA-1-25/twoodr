const twoodButton = document.querySelector('#submit-twood');
twoodButton.addEventListener('click',sendTwood);

function sendTwood(){
  // getText()
  const txtInputButton = document.querySelector('#twood-input');
  const txt = txtInputButton.value;
  console.log(txt);
  if(txt === ''){
  alert('Please enter some text');
  } else{
    displayText = document.querySelector('.twood');
    displayText.innerText = txt;
  }


  // overwriteExistingText


}


const txtInputButton = document.querySelector('#twood-input');
const txt = txtInputButton.innerText;

console.log(txt);
console.log(txt === '');
console.log('its working');