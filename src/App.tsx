import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router";
import {RecipesList} from "./RecipesList";
import {BrowserRouter, Link} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/react">
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </div>
                </Route>
                <Route exact path="/recipes">
                    <RecipesList/>
                </Route>
                <Route exact path="/recipes/:recipe_id">
                    Specific recipe
                </Route>
                <Route exact path="/">
                    <Link to="/recipes">Recipe list</Link>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
