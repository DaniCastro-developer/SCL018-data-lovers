
   
// estas funciones son de ejemplo

const filters = {

genderFunction(rickandmorty, gender){
  let onlyGender = rickandmorty.filter((character) => {
  return character.gender === gender;
  });
  //console.log(onlyGender);
  return onlyGender;
},


}
  
  export default filters
  
