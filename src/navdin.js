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
    
      let nav = `<nav class="allFilters"> 
        <div class="filter-Species">
          <select name="" id="filterSpecies" class="selectFilter">
          <option value="species" selected>Species</option>
          `;
    
      species.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
        //console.log(e);
      });
    
      nav += `</select>
        </div>
      <div class="filter-Origin">
        <select name="" id="filterOrigin" class="selectFilter">
        <option value="Origin" selected>Origin</option>
        `;
    
      origin.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
      </div>
      <div class="filter-Status">
        <select name="" id="filterStatus" class="selectFilter">
        <option value="status" selected>Status</option>`;
    
      status.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
        </div>
      <div class="filter-Gender">
        <select name="filterGender" id="filterGender" class="selectFilter">
        <option value="Genero" selected>Gender</option>
        `;
    
      gender.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
      </div>
      <div class="filter-Location">
        <select name="" id="filterLocation" class="selectFilter">
        <option value="Location" selected>Location</option>
        `;
    
      location.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      return nav;
    };

export default showNav