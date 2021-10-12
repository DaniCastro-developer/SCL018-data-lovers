
   
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

locationFunction(rickandmorty, location) {
  let onlyLocation = rickandmorty.filter ((character) => {
  return character.location.name === location;
});
return (onlyLocation);

},

originFunction(rickandmorty, origin) {
  let onlyOrigin = rickandmorty.filter ((character) => {
  return character.origin.name === origin;
});
return (onlyOrigin);

}

}
  
export default filters

