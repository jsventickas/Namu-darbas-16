'use strict';

var first = document.getElementById('first');
var second = document.getElementById('second');
var input = document.getElementById('input');
var number = document.getElementById('number');
var playerOne = document.getElementById('playerOne');
var playerTwo = document.getElementById('playerTwo');
var reset = document.getElementById('reset');
var dataPlace = document.querySelector('[dataPlace]');
var number = 0;
var count = 0;

first.innerText = number;
second.innerText = number;
// playerOne.addEventListener('click', function(){
//  var newBox = document.changeElement('div');
//  newBox.innerHTML = 
//  `
//  <h2 id="first">N</h2>
//  `
//  dataPlace.append(newBox);
// })
playerOne.onclick = function() {
 
  count += 1;
  first.innerHTML = count;
};
playerTwo.onclick = function() {
 count += 1;
  second.innerHTML = count;
};
reset.onclick = function (){
 first.innerHTML = 0;
 second.innerHTML = 0;
 inputNumber.innerHTML = 0;
}
input.onclick = function() {
  count += 1;
  inputNumber.innerHTML = count;
};