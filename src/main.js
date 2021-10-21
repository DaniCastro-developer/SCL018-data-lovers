import filters from './data.js';
import showNav from './navdin.js'

import data from './data/rickandmorty/rickandmorty.js';


// -------- Llama a los id filters para mostrarlos en la barra de filtros ----- //
document.getElementById('filters').innerHTML += showNav();

// ----- ocultar y mostrar primera y segunda página ----  //

document.getElementById('startButton').addEventListener('click',()=>{
    document.getElementById('page1').hidden=true;
    document.getElementById('page2').hidden=false; 
},false);

document.getElementById('imageReturn').addEventListener('click',()=>{
    document.getElementById('page2').hidden=true;
    document.getElementById('page1').hidden=false;
},false);


// ----- hacer la variable de los datos e imprimirlos en pantalla ----- //


// variable con toda la data 
let rickandmorty = data.results;

// div donde se muestras las tarjetas 
const div = document.getElementById('showCards');


// función que imprime las tarjetas en la pantalla
  const makeCard = (characters) => {
    //Declaro una variable vacía para imprimir la lista de personajes
    let list = ``;
    div.innerHTML ='';
    
    //Incio del bucle for
    for (let i=0; i<characters.length; i++ ){
      // A nuestra variable vacía se le va agregando este template string
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
              <p id="statusBack" class="infoBack"> Status: ${characters[i].status} </p>
              <p id="genderBack" class="infoBack"> Gender: ${characters[i].gender} </p>
              <p id="speciesBack" class="infoBack"> Specie: ${characters[i].species} </p>
            </div>
          </div>
            
        </div>
      </div>`;
  }
  div.innerHTML = list;

  // función para hacer clic y voltear las tarjetas
const click = document.getElementsByClassName('cardContainer-inner');
for (let i=0; i < click.length; i++ ) {
  click[i].addEventListener ('click', () => {
     click[i].firstElementChild.classList.toggle('cardActive');
  })
}
}
// Llamamos a la función makeCard y la llenamos con la data
makeCard(rickandmorty);



// llamado a barra de busqueda
  const selectSearch= document.querySelector('#searchBar');
  selectSearch.addEventListener('keyup', (e) => {
    const searchSelect = e.target.value;
      let onlySearch = filters.searchFunction(rickandmorty, searchSelect);
      makeCard(onlySearch);
  });

//llamado a filtros de orden en data.js
let selectAZ = document.getElementById('buttonAZ');
let selectZA = document.getElementById('buttonZA');

  selectAZ.addEventListener('click', function () {
      let characters = filters.orderAZ(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty); 
    });

  selectZA.addEventListener('click', function () {
      let characters = filters.orderZA(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty); 
    });


// llamado a otros filtros de data.js
const selectGender= document.querySelector('#filterGender');
selectGender.addEventListener('change', (e) => {
  if  (selectGender.value === 'Genero') {
    makeCard(rickandmorty);
} else {
    const genderSelect = e.target.options;
    const gender = genderSelect[genderSelect.selectedIndex].text;
    let onlyGender = filters.genderFunction(rickandmorty, gender);
    makeCard(onlyGender);
}
});

const selectSpecies= document.querySelector('#filterSpecies');
selectSpecies.addEventListener('change', (e) => {
  if(selectSpecies.value === 'species'){
    makeCard(rickandmorty);
  } else {
  const genderSelect = e.target.options;
  const valueSpecie = genderSelect[genderSelect.selectedIndex].text;
    let species = valueSpecie;
    let onlySpecies = filters.speciesFunction(rickandmorty, species);
    makeCard(onlySpecies);
  }
});

const selectStatus= document.querySelector('#filterStatus');
selectStatus.addEventListener('change', (e) => { 
  if (selectStatus.value === 'status') {
    makeCard(rickandmorty);
  } else {
  const statusSelect = e.target.options;
  const valueStatus = statusSelect[statusSelect.selectedIndex].text;
    let status = valueStatus;
    let onlyStatus = filters.statusFunction(rickandmorty, status);
    makeCard(onlyStatus);
  }
});

const selectLocation= document.querySelector('#filterLocation');
selectLocation.addEventListener('change', (e) => {
  if (selectLocation.value === 'Location') {
    makeCard(rickandmorty);
  }
  else {
  const locationSelect = e.target.options;
  const valueLocation = locationSelect[locationSelect.selectedIndex].text;
    let location = valueLocation;
    let onlyLocation = filters.locationFunction(rickandmorty, location);
    makeCard(onlyLocation);
    }
});

const selectOrigin= document.querySelector('#filterOrigin');
selectOrigin.addEventListener('change', (e) => {
  if (selectOrigin.value === 'Origin') {
    makeCard(rickandmorty);
  } else {
  const originSelect = e.target.options;
  const valueOrigin = originSelect[originSelect.selectedIndex].text;
    let origin = valueOrigin;
    let onlyOrigin = filters.originFunction(rickandmorty, origin);
    makeCard(onlyOrigin);
  }
});



//--------función para botón pegajoso, para que aparezca desde los 600px----- //
function goToUp(pxScreen){
  window.addEventListener('scroll',() =>{
    const scroll = document.documentElement.scrollTop;
    const goUp = document.getElementById('goToUp');
      if(scroll>pxScreen){
        goUp.style.right= 0 + 'px';
      }else {
        goUp.style.right = -160 + 'px';
      }
  })
}
goToUp(600)


// Sonido al botón pegajoso
document.getElementById('goToUp').onclick=soundDubDub;
function soundDubDub(){
  const sound_dub= document.getElementById('dubdub');
  sound_dub.play();
}



// función set Timeout para click

function timeOut () {
  let gif = document.querySelector('#click');
  gif.classList.add('hidden');
}
setTimeout(timeOut,15000)

