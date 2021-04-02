import styled from 'styled-components'
import {useState} from 'react'
import PropTypes from 'prop-types'

export default function Film(props){
    
    return(
        <FilmHeader >
            <h2>{props.filmName}</h2>
        
        </FilmHeader>
    );
}

Film.propTypes = {
    filmName: PropTypes.string
}

const FilmHeader = styled.div`
    color: #00687f;
`
