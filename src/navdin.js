let rickandmorty = data.results;
import data from './data/rickandmorty/rickandmorty.js';

const showNav = () => {
    
    //Esta función descarta valores duplicados.
     function uniqueValue(value, index, option) {
      return option.indexOf(value) === index; 
      // indexOf retorna el primer indice del arreglo donde se encuentra el elemento.
    }

      let species = [];
      rickandmorty.forEach((e) => {
        //forEach() recorre toda la data y en la variable vacía guarda los elementos.
        species.push(e.species); 
        //push añade los elementos que encuentra al final del array vacio que creamos al inicio.
      });
      species = species.filter(uniqueValue);
      

      let origin = [];
      rickandmorty.forEach((e) => {
        origin.push(e.origin.name);
      });
      origin = origin.filter(uniqueValue);

      let status = [];
      rickandmorty.forEach((e) => {
        status.push(e.status);
      });
      status = status.filter(uniqueValue);
    
      let gender = [];
      rickandmorty.forEach((e) => {
        gender.push(e.gender);
      });
      gender = gender.filter(uniqueValue);

      let location = [];
      rickandmorty.forEach((e) => {
        location.push(e.location.name);
      });
      location = location.filter(uniqueValue);

      
      
      //template para la barra con filtros.
    
      let nav = `<select id="filterSpecies" class="selectFilter">
      <option value="Species" selected hidden>Species</option>`;
    
      species.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
        <select id="filterOrigin" class="selectFilter">
        <option value="origin" selected hidden>Origin</option>`;
    
      origin.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
        <select id="filterStatus" class="selectFilter">
        <option value="status" selected hidden> Status </option>`;
    
      status.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
        <select id="filterGender" class="selectFilter">
        <option value="Gender" selected hidden> Gender </option>`;
        
    
      gender.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
        <select id="filterLocation" class="selectFilter">
        <option value="Location" selected hidden> Location </option>`;

    
      location.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      return nav;
    };

export default showNav