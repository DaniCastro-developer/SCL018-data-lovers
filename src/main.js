import {orderAZ} from './data.js'; //importar funciones de data.js//
import data from './data/rickandmorty/rickandmorty.js';
const rickandmorty = data.results;

console.log(orderAZ,data);


//función ocultar mostrar página

document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = false;
  }, false);
  
document.getElementById("returnButton").addEventListener("click", () => {
    document.getElementById("page2").hidden = true;
    document.getElementById("page1").hidden = false;
  }, false);