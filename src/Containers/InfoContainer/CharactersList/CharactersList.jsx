import React, { Component } from 'react'
import classes from './CharactersList.module.css'
import { Link, Route } from 'react-router-dom'
import axios from '../../../axios.js'
import CharacterView from '../../../components/CharacterView/CharacterView'

class CharactersList extends Component {
    state = {
        characterList: null
    }

    componentDidMount() {
        axios
            .get('/character')
            .then(response => {
                this.setState({
                    characterList: response.data.docs
                })
            })
    }

    render() {
        let characters = (<p>Loading...</p>)
        if (this.state.characterList !== null) {
            characters = this.state.characterList.map(character => {
                return (
                  <Link to={"/characters/" + character._id} key={character._id}>
                    <li className={classes.LinkForStyles}>{character.name}</li>
                  </Link>
                );
            })
        }
        return (
            <>
                <ul className={classes.CharactersList}>
                    {characters}
                </ul>
                <Route path="/characters/:id" exact component={CharacterView} />
            </>
        )
    }
}


export default CharactersList