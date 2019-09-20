let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
  	  setUserName();
  } else {
  	localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, Chrome is cooler, ' + myName;
  }
}
  
  	  	  
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, Chrome is cooler, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}