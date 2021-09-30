/*import orderAZ from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

export const rickandmorty = data.results;

console.log(orderAZ, data);*/

//---------función mostrar-ocultar páginas------ 

document.getElementById("button-start").addEventListener("click", () => {
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = false;
  }, false);

document.getElementById("return-button").addEventListener("click", () => {
    document.getElementById("page2").hidden = true;
    document.getElementById("page1").hidden = false;
  }, false);