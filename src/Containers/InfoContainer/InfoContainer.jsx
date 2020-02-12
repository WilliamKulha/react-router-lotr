import React from 'react'
import classes from './InfoContainer.module.css'
import CharactersList from './CharactersList/CharactersList'
import QuotesList from './QuotesList/QuotesList'
import BooksList from './BooksList/BooksList'
import CharacterView from '../../components/CharacterView/CharacterView'
import {Switch, NavLink, Route} from 'react-router-dom'

const InfoContainer = props => (
    <>
        <header>
            <nav className={classes.HeaderNav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" exact>Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/books" exact>Books</NavLink>
                    </li>
                   <li>
                        <NavLink to="/characters" exact>Characters</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Switch>
            <Route path="/characters" component={CharactersList}/>
            <Route path="/quotes" component={QuotesList} />
            <Route path="/books" component={BooksList} />
        </Switch>
    </>
)

export default InfoContainer