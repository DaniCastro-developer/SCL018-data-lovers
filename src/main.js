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


const makeCard = (characters) => {
    let list = '';
    document.getElementById("cards").innerHTML = "";
     `<div class="frontCard">
      <img id="image" class="image" src="${characters.image}"/>
      <div class="nametag">
      <p id="nameChar" class="name-frontcard"> ${characters.name} </p>
      </div>`;
 };
 
 rickandmorty.forEach((value) => {
    document.getElementById("cards").innerHTML += list;
  });




/*const makeCard = (characters) => {
    let list = "";
    document.getElementById("cards").innerHTML = "";
    //Incio el bucle
    rickandmorty.forEach ((value) =>  {
     return `<div class="frontCard">
      <img id="image" class="image" src="${characters.image}"/>
      <div class="nametag">
      <p id="nameChar" class="name-frontcard"> ${characters.name} </p>
      </div>`;
      // console.log(characters[i]);
    })
    document.getElementById("cards").innerHTML = list;
  }
  makeCard(rickandmorty);*/