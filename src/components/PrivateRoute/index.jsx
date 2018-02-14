import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { fakeAuth } from '../../util/auth';

import * as actionsFromOtherFiles from '../../actions/login';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:false
        };
    }
    render() {
        const { component: Component,login, ...rest } = this.props;
        // const isLogin = userinfo.isLogin;

        console.log('privateRoute');
        console.log(login.isLogin);
        return (
            <Route {...rest} render={props => (
                login.isLogin ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from:props.location}
                    }} />
                )
            )}
            />
        );
    }
}

/* import redux */

const mapStateToProps = (state, ownProps) => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useractions: bindActionCreators(actionsFromOtherFiles,dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
