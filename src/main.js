import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("startButton").addEventListener("click",()=>{
    document.getElementById("page1").hidden=true;
    document.getElementById("page2").hidden=false;
},false);

document.getElementById("returnButton").addEventListener("click",()=>{
    document.getElementById("page2").hidden=true;
    document.getElementById("page1").hidden=false;
},false);




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