import React, { Component } from 'react';
// import { fakeAuth } from '../../util/auth';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionsFromOtherFiles from '../../actions/login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

    login = () => {
        this.props.useractions.update({
            isLogin:true
        });
        this.setState({
            isLogin:true
        });
    }

    render() {
        const { from } = this.props.location.state || {
            from: {
                pathname: '/'
            }
        };
        const { isLogin } = this.state;

        if (isLogin) {
            return (
                < Redirect to = {
                    from
                } />
            );
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        login : state.login
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useractions : bindActionCreators(actionsFromOtherFiles, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
