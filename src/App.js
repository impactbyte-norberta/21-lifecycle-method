import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Articles from './Pages/Articles/Articles';
import Home from './Pages/Home/Home';

import './App.css';

function App() {
    return (
        <Router>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/articles'>Articles</Link>
            </nav>
            <div className='App'>
                <Switch>
                    <Route exact path='/articles'>
                        <Articles />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
