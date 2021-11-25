'use strict';
//Stating Conditions
document.querySelector('.dice').classList.add('hidden');

//Getting Started
let currentp1 = document.getElementById('current--0');
let scorep1 = document.getElementById('score--0');
let currentp2 = document.getElementById('current--1');
let score2 = document.getElementById('score--1');
const rollbtn = document.querySelector('.btn--roll');

//Rolling the Dice

rollbtn.addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  currentp1.textContent = randomNumber;

  document.querySelector('.dice').classList.remove('hidden');
  document.querySelector('.dice').src = `dice-${randomNumber}.png`;

  
