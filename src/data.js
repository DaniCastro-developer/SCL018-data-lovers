
   
// estas funciones son de ejemplo

import rickandmorty from "./data/rickandmorty/rickandmorty";


export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const orderAZ = rickandmorty.sort((a,b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

//custom console
console.log(orderAZ);


