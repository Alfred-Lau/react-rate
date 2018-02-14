import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import Grandparent from './components/Refs';
import Context from './components/Context';
import Fragment from './components/Fragment';
import ErrorBoundry from './components/ErrorBoundry';
import Widget from './components/Widget';
import RenderProps from './components/RenderProps';

class App extends Component {
    constructor (props, ctx) {
        super(props);
        this.state = {
            data: [1, 2, 3]
        };
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
            <div className='App'>
                <Grandparent></Grandparent>
                <Context messages={messages}></Context>
                <List items={this.state.data}></List>
                <table>
                    <tr>
                        <Fragment />
                    </tr>
                </table>
                <ErrorBoundry>
                    <Widget></Widget>
                </ErrorBoundry>
                <RenderProps></RenderProps>
            </div>
        );
    }
}

export default App;
