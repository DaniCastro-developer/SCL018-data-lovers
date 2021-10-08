let rickandmorty = data.results;
import data from './data/rickandmorty/rickandmorty.js';

const showNav = () => {
    // Ordenar alfabeticamente
    
      //Selecting unique values in key species
    
      let species = [];
      let origin = [];
      let status = [];
      let gender = [];
      let location = [];
    
      rickandmorty.forEach((e) => {
        //forEach() ejecutara la funcion indicada una vez por cada elemento del array, por lo que no dara nombres repetidos
        species.push(e.species); //push añade nuevos elementos al final del array y devuelve uno nuevo, por lo que toma toda la data y devuelve los nombres no repetidos
      });
    
      rickandmorty.forEach((e) => {
        origin.push(e.origin.name);
      });
    
      rickandmorty.forEach((e) => {
        status.push(e.status);
      });
    
      rickandmorty.forEach((e) => {
        gender.push(e.gender);
      });
    
      rickandmorty.forEach((e) => {
        location.push(e.location.name);
      });
    
      function onlyUnique(value, index, self) {
        //Esta función descarta o elimina valores duplicados.
        return self.indexOf(value) === index; // Self tiene un alcance global. indexOf devuelve el indice, dentro del objeto string que realiza la llamada.
      }
      let uniqueSpecies = species.filter(onlyUnique); //El método filter recorrerá la matriz y dejará solo aquellas entradas que pasen la función onlyUnique.
      // onlyUnique comprueba que
    
      let uniqueOrigin = origin.filter(onlyUnique);
    
      let uniqueStatus = status.filter(onlyUnique);
    
      let uniqueGender = gender.filter(onlyUnique);
    
      let uniqueLocation = location.filter(onlyUnique);
      //creating navigation with unique values
    
      let nav = `<nav class="allFilters"> 
        <div class="filter-Species">
          <select name="" id="filterSpecies" class="selectFilter">
          <option value="species" selected>Species</option>
          `;
    
      uniqueSpecies.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
        // console.log(e);
      });
    
      nav += `</select>
        </div>
      <div class="filter-Origin">
        <select name="" id="filterOrigin" class="selectFilter">
        <option value="Origin" selected>Origin</option>
        `;
    
      uniqueOrigin.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
      </div>
      <div class="filter-Status">
        <select name="" id="filterStatus" class="selectFilter">
        <option value="status" selected>Status</option>`;
    
      uniqueStatus.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
        </div>
      <div class="filter-Gender">
        <select name="filterGender" id="filterGender" class="selectFilter">
        <option value="Genero" selected>Gender</option>
        `;
    
      uniqueGender.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
      </div>
      <div class="filter-Location">
        <select name="" id="filterLocation" class="selectFilter">
        <option value="Locacion" selected>Location</option>
        `;
    
      uniqueLocation.forEach((e) => {
        nav += `<option value="${e}">${e}</option>`;
      });
    
      nav += `</select>
      </div>
      <div>
              <input
                type="text"
                id="searchInput"
                class="selectFilter"
          
              />
            </div>
      </nav>`;
      return nav;
    };
    
    document.getElementById("filters").innerHTML += showNav();


export default showNav