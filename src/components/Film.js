import styled from 'styled-components'
import {useState} from 'react'
import PropTypes from 'prop-types'
import closedArrow from '../Assets/ARROW CLOSE.svg'
import openArrow from '../Assets/ARROW OPEN.svg'

export default function Film(props){

    const [isClosed, setIsUp] = useState(true);
    
    function handleToggle() {
        setIsUp(!isClosed)
    }
    return(
        <FilmHeader >
            <h2>{props.filmName}</h2>
            <button className={{btn}} onClick={(() => handleToggle())}>
                <img src={isClosed ? openArrow : closedArrow} alt=""/>
            </button>
        </FilmHeader>
    );
}

Film.propTypes = {
    filmName: PropTypes.string
}

const FilmHeader = styled.div`
    color: #00687f;
    display: float;
`

const btn = {
    backgroundColor: "orange"
};