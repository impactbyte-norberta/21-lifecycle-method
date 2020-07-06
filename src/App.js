import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Articles from "./Pages/Articles/Articles";
import Home from "./Pages/Home/Home";
import Github from "./Pages/Github/Github";
import GithubDetail from "./Pages/GithubDetail/GithubDetail";

import "./App.css";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/github">Github</Link>
            </nav>
            <div className="App">
                <Switch>
                    <Route exact path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/github">
                        <Github />
                    </Route>
                    <Route exact path="/github-detail/:username">
                        <GithubDetail />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
