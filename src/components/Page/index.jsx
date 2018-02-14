import React, { Component } from 'react';

import './style.css';
export default class Page extends Component {
    render () {
        const match = this.props.match;
        return (
            <div>
                {typeof match.params} &nbsp;
                {match.isExact.toString()} &nbsp;
                {match.path} &nbsp;
                {match.url}
            </div>
        );
    }
}
