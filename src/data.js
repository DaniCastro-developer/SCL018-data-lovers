
   
// estas funciones son de ejemplo



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
console.log ('ordenAZ', orderCharacters);
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
console.log ('orderZA', orderCharacters);
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
console.log ('orderDefault', orderCharacters);
return orderCharacters;
},

orderMale(rickandmorty){
  let orderGender= rickandmorty.filter((characters)=>
    characters.gender===Male);
  console.log('filtroGenero',orderMale);
  return orderGender;
}

}

export default filters