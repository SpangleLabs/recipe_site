import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";
import {RecipesList} from "./RecipesList";

const browserHistory = createBrowserHistory({
    //basename: "/"
})

function App() {
    return (
        <Router history={browserHistory}>
            <Routes/>
        </Router>
    )
}

const Routes: React.FunctionComponent = () => {
    return (
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
        </Switch>
    )
}

export default App;
