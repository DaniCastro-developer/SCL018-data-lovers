import filters from './data.js';

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

// función para imprimir datos en consola

  const makeCard = (characters) => {
    //Declaro una variable para imprimir la lista de personajes
    let list = ``;
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
                <p id="statusBack" class="statusBack"> Estado: ${characters[i].status} </p>
                <p id="genderBack" class="genderBack"> Género: ${characters[i].gender} </p>
                <p id="speciesBack" class="speciesBack"> Especie: ${characters[i].species} </p>
              </div>
            </div>
              
          </div>
        </div>`;
    }
    div.innerHTML = list;
  }
  makeCard(rickandmorty);

// función para dar vueltas las cartas//
  /*const descripctionCard = e.currentTarget;

  descripctionCard.addEventListener ("click", ()=> { 
    descripctionCard.classList.toggle("card.active");
  })*/

  
// ordernar alfabeticamente las tarjetas//
  let select = document.getElementById("filterA-Z");
  select.addEventListener("change", function () {
  
    if (select.value === "orderAtoZ") {
      let characters = filters.orderAZ(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty); 
    }
    else if (select.value === "orderZtoA") {
      let characters = filters.orderZA(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty);
    }
    else if (select.value === "alphabeticalOrder"){
      let characters = filters.orderDefault(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty);
    }
  });


  let gender = document.getElementById("filterGender");
  select.addEventListener("change", function () {
  
    if (gender.value === "male") {
      let characters = filters.orderMale(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty); 
    }
    else if (gender.value === "female") {
      let characters = filters.orderZA(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty);
    }
    else if (gender.value === "unknown"){
      let characters = filters.orderDefault(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty);
    }
    else if (gender.value === "genderLess") {
      let characters = filters.orderZA(rickandmorty);
      rickandmorty = characters;
      makeCard(rickandmorty);
    }
  });
