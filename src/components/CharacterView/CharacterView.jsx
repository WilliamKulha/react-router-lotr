import React, { Component } from 'react'
import axios from '../../axios'
import classes from './CharacterView.module.css'

class CharacterView extends Component {
    state = {
        loadedCharacter: null
    }

    componentDidMount() {
        this.loadData()
    }

    componentDidUpdate() {
        this.loadData()
    }

    loadData() {
        if (this.props.match.params.id) {
          if (
            !this.state.loadedCharacter ||
            (this.state.loadedCharacter &&
              this.state.loadedCharacter._id != this.props.match.params.id)
          ) {
            axios.get("/character/" + this.props.match.params.id).then(response => {
               console.log(response);
              this.setState({ loadedCharacter: response.data });
            });
          }
        }
    }
    render() {
        let character = (<p>Loading...</p>)
        if (this.state.loadedCharacter) {
            character = (
               <section>
               <p>Name: {this.state.loadedCharacter.name}</p>
               <p>Race: {this.state.loadedCharacter.race}</p>
               <p>Born: {this.state.loadedCharacter.birth}</p>
               <p>Died: {this.state.loadedCharacter.death}</p>
               </section>
            )
        }
        return (
          <section className={classes.CharacterDetailWrapper}>
            {character}
          </section>
        );
    }
}



export default CharacterView