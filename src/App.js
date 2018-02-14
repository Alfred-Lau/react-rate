import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import List from './components/List/List';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionsFromOtherFiles from './actions/login';

class App extends Component {
    componentWillMount () {
        let isLogin = localStorage.getItem('islogin');
        if (!isLogin) {
            isLogin = false;
        }
        this.props.useractions.update({
            isLogin});
    }
    render () {
        return (
            <Router>
                <div className='App'>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/list' component={List}></Route>
                    <Route path='/login' component={Login}></Route>
                    <PrivateRoute path='/private' component={Protected} />
                </div>
            </Router>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useractions: bindActionCreators(actionsFromOtherFiles, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
