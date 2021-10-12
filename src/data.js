
   
// estas funciones son de ejemplo

const filters = {


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
  console.log(onlyLocation)
  return onlyLocation;
  
},

originFunction(rickandmorty, location){
  let onlyLocation = rickandmorty.filter((character) => {
  return character.location.name === location;
  });
  console.log(onlyLocation)
  return onlyLocation;
  
},


}
  
export default filters
  
