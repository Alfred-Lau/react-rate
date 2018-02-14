import React, { Component } from 'react';
import Grandparent from '../Refs';
import Context from '../Context';
import Fragment from '../Fragment';
import ErrorBoundry from '../ErrorBoundry';
import Widget from '../Widget';
import RenderProps from '../RenderProps';

import { Link } from 'react-router-dom';

class Home extends Component {
    constructor (props, ctx) {
        super(props);
    }
    render () {
        const messages = [
            {
                id: 1,
                text: 'aaa'
            }, {
                id: 2,
                text: 'bbb'
            }, {
                id: 3,
                text: 'ccc'
            }
        ];
        return (
            <div>
                <p>
          Home
                </p>
                <p>
                    <Link to='/list'> List
                    </Link>
                </p>
                <p>
                    <Link to='/private'> Private
                    </Link>
                </p>
                <Grandparent></Grandparent>
                <Context messages={messages}></Context>
                <table>
                    <tbody>
                        <tr>
                            <Fragment />
                        </tr>
                    </tbody>
                </table>
                <ErrorBoundry>
                    <Widget></Widget>
                </ErrorBoundry>
                <RenderProps></RenderProps>
            </div>
        );
    }
}

export default Home;
