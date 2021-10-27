
// Estas son las funciones que ocuparemos en main.js

//Creamos un objeto filters que contiene las funciones

const filters = {

  orderAZ: function (rickandmorty) {
    let orderCharacters = rickandmorty.sort((a,b) => {
      if (a.name > b.name) {
        return 1;
      }
      else {
        return -1;
      }
    });
    return orderCharacters;
    },
    
    orderZA: function (rickandmorty) {
    let orderCharacters= rickandmorty.sort((a,b) => {
      if (b.name > a.name) {
        return 1;
      }
      else {
        return -1;
      }
    });
    return orderCharacters;
    },
    


searchFunction: function (rickandmorty, searchValue){
  let onlySearch = rickandmorty.filter(character => character.name.toLowerCase().includes(searchValue.toLowerCase()));
    return onlySearch
},

genderFunction: function (rickandmorty, gender){
  return rickandmorty.filter(character => character.gender === gender);
},





}
  
export default filters
  
