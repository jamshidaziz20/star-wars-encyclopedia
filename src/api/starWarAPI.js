/**
 * Array of films
 * Each film is an object
 *  Has name
 *  Has array of planet objects
 *  Each planet has the following props
  [
   {name: blank, planets[
     {name: , rotationPeriod: }, {}, {}
  ]}
  ]
 */

export default async function fetchAllFilms(url){

  const allFilms = [];
  try {
    const response = await fetch(url);
    const apiData = await response.json();
    const films = apiData.results;
    
    for (let i = 0; i < films.length; i++){
      const planetsAPI = films[i].planets;
      let planetsData = []
      for(let j = 0; j < planetsAPI.length; j++) {
        const planet = await fetchPlanet(planetsAPI[j]);
        planetsData.push(planet);

      }
      allFilms.push(
        {
          name: films[i].title,
          planets: planetsData
        }
      );
    }

    // console.log(allFilms);
    return allFilms;

  } catch (err) {
      return err
  }

  
  }

async function fetchPlanet(url) {     
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      planetName: data.name,
      rotationPeriod: data.rotation_period,
      orbitalPeriod: data.orbital_period,
      diameter: data.diameter,
      climate: data.climate,
      surfaceWater: data.surface_water,
      population: data.population
      };
  } catch (err) {
    return err;
  }
}