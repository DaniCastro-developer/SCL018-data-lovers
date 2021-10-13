import filters from './data.js';
import showNav from './navdin.js';

import data from './data/rickandmorty/rickandmorty.js';

window.addEventListener('load', lowVolume);

var video = document.getElementById('myVideo');
function lowVolume () {
  video.volume = 0.1;
}


document.getElementById("startButton").addEventListener("click",()=>{
    document.getElementById("page1").hidden=true;
    document.getElementById("page2").hidden=false; 
},false);

document.getElementById("imageReturn").addEventListener("click",()=>{
    document.getElementById("page2").hidden=true;
    document.getElementById("page1").hidden=false;
},false);

function goToUp(pxScreen){
  window.addEventListener('scroll',() =>{
    const scroll = document.documentElement.scrollTop;
    const goUp = document.getElementById('goToUp');
      if(scroll>pxScreen){
        goUp.style.right= 20 + 'px';
      }else {
        goUp.style.right = -150 + 'px';
      }
  })
}
goToUp(500)


let rickandmorty = data.results;
const div = document.getElementById('showCards');

  const makeCard = (characters) => {
    //Declaro una variable para imprimir la lista de personajes
    let list = ``;
    div.innerHTML ='';
    //Incio el bucle

    for (let i=0; i<characters.length; i++ ){
        list += `

        <div id="printCharacters" class="cardContainer-inner">
        <div class= "card" id= "card">
          <div class="frontCard" id="frontCard">
              <img id="image" class="image" src="${characters[i].image}"/>
              <div class="nametag">
              <p id="nameFront" class="name-frontcard"> ${characters[i].name} </p>
              </div>
          </div>
          <div class="backCard">
            <img id="imageBack" class="imageBack" src="${characters[i].image}"/>
            <div class="nameCardBack">
              <p id="nameBack" class="nameBack"> ${characters[i].name} </p>
            </div>
            <div class="description">
              <p id="statusBack" class="infoBack"> Estado: ${characters[i].status} </p>
              <p id="genderBack" class="infoBack"> Género: ${characters[i].gender} </p>
              <p id="speciesBack" class="infoBack"> Especie: ${characters[i].species} </p>
            </div>
          </div>
            
        </div>
      </div>`;
  }
  div.innerHTML = list;
}
makeCard(rickandmorty);

// search bar

  const selectSearch= document.querySelector('#searchBar');

  selectSearch.addEventListener('keyup', (e) => {
    
    const searchSelect = e.target.value;
      div.innerHTML = "";
      let onlySearch = filters.searchFunction(rickandmorty, searchSelect);
      makeCard(onlySearch);
  });

//order filters
let selectAZ = document.getElementById("buttonAZ");
let selectZA = document.getElementById("buttonZA");

  selectAZ.addEventListener("click", function () {
      let characters = filters.orderAZ(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty); 
    });

  selectZA.addEventListener("click", function () {
      let characters = filters.orderZA(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty); 
    });

//Other filters

  const selectGender= document.querySelector('#filterGender');
  selectGender.addEventListener('change', (e) => {
  const genderSelect = e.target.options;
  const valueGender = genderSelect[genderSelect.selectedIndex].text;
    div.innerHTML = "";
    let gender = valueGender;
    let onlyGender = filters.genderFunction(rickandmorty, gender);
    makeCard(onlyGender);
  });


const selectSpecies= document.querySelector('#filterSpecies');
selectSpecies.addEventListener('change', (e) => {
  const genderSelect = e.target.options;
  const valueSpecie = genderSelect[genderSelect.selectedIndex].text;
    div.innerHTML = "";
    let species = valueSpecie;
    let onlySpecies = filters.speciesFunction(rickandmorty, species);
    makeCard(onlySpecies);
});

const selectStatus= document.querySelector('#filterStatus');
selectStatus.addEventListener('change', (e) => {
  const statusSelect = e.target.options;
  const valueStatus = statusSelect[statusSelect.selectedIndex].text;
    div.innerHTML = "";
    let status = valueStatus;
    let onlyStatus = filters.statusFunction(rickandmorty, status);
    makeCard(onlyStatus);
});

const selectLocation= document.querySelector('#filterLocation');
selectLocation.addEventListener('change', (e) => {
  const locationSelect = e.target.options;
  const valueLocation = locationSelect[locationSelect.selectedIndex].text;
    div.innerHTML = "";
    let location = valueLocation;
    let onlyLocation = filters.locationFunction(rickandmorty, location);
    makeCard(onlyLocation);
});

const selectOrigin= document.querySelector('#filterOrigin');
selectOrigin.addEventListener('change', (e) => {
  const originSelect = e.target.options;
  const valueOrigin = originSelect[originSelect.selectedIndex].text;
    div.innerHTML = "";
    let origin = valueOrigin;
    let onlyOrigin = filters.originFunction(rickandmorty, origin);
    makeCard(onlyOrigin);
});




document.getElementById('goToUp').onclick=soundDubDub;

function soundDubDub(){
  const sound_dub= document.getElementById('dubdub');
  sound_dub.play();
}