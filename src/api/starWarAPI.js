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

export default function fetchAllFilms(url){
    let allFilms = [];
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const films = data.results;
      const planets = films[0].planets;
      console.log(films.length);
    })
    .catch((error) => {
      console.log("Trouble accessing the film");
    })
  }

const fetchPlanet = (url) => {
    
}