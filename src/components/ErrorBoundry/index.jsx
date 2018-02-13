import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            info:null
        };
    }
    componentDidCatch(err, info) {
        this.setState({
            err,
            info
        });   
    }
    render() {        
        if (this.state.info) {
            return (<div>
                            has an error
            </div>);
        } else {
            return this.props.children;
        }
    }
}
