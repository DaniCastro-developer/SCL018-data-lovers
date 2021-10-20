
// Estas son las funciones que ocuparemos en main.js

//Creamos un objeto filters que contiene las funciones

const filters = {

  orderAZ(rickandmorty) {
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
    
    orderZA(rickandmorty) {
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
    


searchFunction(rickandmorty, searchValue){
  let onlySearch = rickandmorty.filter(character => character.name.toLowerCase().includes(searchValue.toLowerCase()));
    return onlySearch
},

genderFunction(rickandmorty, gender){
  let onlyGender = rickandmorty.filter((character) => {
  return character.gender === gender;
  });
  //console.log(onlyGender);
  return onlyGender;
},



speciesFunction(rickandmorty, species){
  let onlySpecies = rickandmorty.filter((character) => {
  return character.species === species;
  });
  return onlySpecies;
},

statusFunction(rickandmorty, status){
  let onlyStatus = rickandmorty.filter((character) => {
  return character.status === status;
  });
  return onlyStatus;
},


locationFunction(rickandmorty, location){
  let onlyLocation = rickandmorty.filter((character) => {
  return character.location.name === location;
  });
  return onlyLocation;
  
},

originFunction(rickandmorty, origin){
  let onlyOrigin = rickandmorty.filter((character) => {
  return character.origin.name === origin;
  });
  return onlyOrigin;
  
},


}
  
export default filters
  
