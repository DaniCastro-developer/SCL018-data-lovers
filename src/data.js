export const orderAZ = (rickandmorty) => {
let orderName = rickandmorty.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } 
  else {
    return -1;
  }
});
  console.log(1,orderName);
  return orderName;
};





