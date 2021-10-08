import filters from './data.js';
import showNav from './navdin.js';

import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("startButton").addEventListener("click",()=>{
    document.getElementById("page1").hidden=true;
    document.getElementById("page2").hidden=false; 
},false);

document.getElementById("imageReturn").addEventListener("click",()=>{
    document.getElementById("page2").hidden=true;
    document.getElementById("page1").hidden=false;
},false);

let rickandmorty = data.results;
const div = document.getElementById('showCards');

  const makeCard = (characters) => {
    //Declaro una variable para imprimir la lista de personajes
    let list = ``;
    //Incio el bucle

    for (let i=0; i<characters.length; i++ ){
        list += `
        <div class= "card">
          <div id="printCharacters" class="cardContainer-inner">
              <div class="frontCard">
                <img id="image" class="image" src="${characters[i].image}"/>
                <div class="nametag">
                <p id="nameChar" class="name-frontcard"> ${characters[i].name} </p>
                </div>
              </div>
          </div>
        </div>`;
    }
    div.innerHTML = list;
  }
  makeCard(rickandmorty);


const selectGender= document.querySelector('#filterGender');

selectGender.addEventListener('change', (e) => {

  const genderSelect = e.target.options;
  const valueGender = genderSelect[genderSelect.selectedIndex].text;
    div.innerHTML = "";
    let gender = valueGender;
    let onlyGender = filters.genderFunction(rickandmorty, gender);
    makeCard(onlyGender);
});
