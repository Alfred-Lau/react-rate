import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Page from './components/Page';
import List from './components/List/List';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

class App extends Component {
    render () {
        return (
            <div className='App'>
        outside the router
                <Router>
                    <div>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/list' component={List}></Route>
                        <Route path='/login' component={Login}></Route>
                        <PrivateRoute path='/private' component={Protected} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
