import Film from './components/Film.js';
import styled from 'styled-components';
import fetchAllFilms from './api/starWarAPI'
import {useState, useEffect} from 'react';

export default function App() {

  const url = 'https://swapi.dev/api/films';
  const [allFilms, setAllFilms] = useState([]);

  useEffect(async () => {
    let films = await fetchAllFilms(url); 
    setAllFilms(films)
    // console.log(allFilms);
  },[])
  return (
    <Container>
      <img src="" alt=""/>
      <Film filmName= 'A New Hope'></Film>
      <Film filmName= 'Attack of the Clones'></Film>
      <Film filmName= 'The Phantom Menace'></Film>
      <Film filmName= 'Revenge of the Sith'></Film>
      <Film filmName= 'Return of the Jedi'></Film>
      <Film filmName= 'The Empire Strikes Back'></Film>
      <Film filmName= 'The Force Awakens'></Film>
    </Container>

  );
}

const Container = styled.div`

background-color: #e0e6ee; 
max-width: 900px;
margin: auto;
padding: 4px;
border-radius: 10px;
`