const filters = {

orderAZ(rickandmorty) {
let orderCharacters = rickandmorty.sort((a,b) => {
  if (a.name > b.name) {
    return 1;
  }
  {
    return -1;
  }
});
return orderCharacters;
},

orderZA(rickandmorty) {
let orderCharacters= rickandmorty.sort((a,b) => {
  if (a.name < b.name) {
    return 1;
  }
  {
    return -1;
  }
});
return orderCharacters;
},

orderDefault(rickandmorty){
 let orderCharacters= rickandmorty.sort((a,b) => {
  if (a.id > b.id) {
    return 1;
  }
  {
    return -1
  }
});
return orderCharacters;
},

genderFunction(rickandmorty, gender){
  let onlyGender = rickandmorty.filter((character) => {
  return character.gender === gender;
  });
  console.log(onlyGender);
  return onlyGender;
},



}

export default filters