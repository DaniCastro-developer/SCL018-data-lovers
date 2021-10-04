import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const rickandmorty = data.results;

console.log("characheter",rickandmorty);

const div = document.getElementById('cards');

const makeCard = (characters) => {
    return `<div class="frontCard">
      <img id="image" class="image" src="${characters.image}"/>
      <div class="nametag">
      <p id="nameChar" class="name-frontcard"> ${characters.name} </p>
      </div>`;
 };

 for (let i=0; i<10; i++) {
     div.innerHTML += makeCard(rickandmorty[i]);

 }