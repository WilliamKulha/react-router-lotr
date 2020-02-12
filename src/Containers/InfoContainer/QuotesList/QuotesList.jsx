import React, { Component } from 'react'
import classes from './QuotesList.module.css'
import axios from '../../../axios.js'

class QuotesList extends Component {
    state = {
        quotesList: null
    }

    componentDidMount() {
        axios
            .get('/quote')
            .then(response => {
                this.setState({
                    quotesList: response.data.docs
                })
            })
    }

    render() {
        let quotes = (<p>Loading...</p>)
        if (this.state.quotesList) {
            quotes = this.state.quotesList.map(quote => {
                return (
                    <li key={quote._id}>{quote.dialog}</li>
                )
            })
        }
        return(
            <ul className={classes.QuotesList}>
                {quotes}
            </ul>
        )
    }
}


export default QuotesList