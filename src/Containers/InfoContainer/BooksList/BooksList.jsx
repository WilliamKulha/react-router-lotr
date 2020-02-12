import React, { Component } from 'react'
import classes from './BooksList.module.css'
import axios from '../../../axios'

class BooksList extends Component {
    state = {
        booksList: null
    }

    componentDidMount(){
        axios
            .get('/book')
            .then(response => {
                this.setState({
                    booksList: response.data.docs
                })
            })
    }

    render(){
        let books = (<p>Loading...</p>)
        if (this.state.booksList !== null) {
            books = this.state.booksList.map(book => {
                return (
                   <li key={book._id}>{book.name}</li>
                )
            })
        }
        return <ul className={classes.BookList}>{books}</ul>;
    }
}

export default BooksList