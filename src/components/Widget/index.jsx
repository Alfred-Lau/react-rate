import React, { Component } from 'react';

export default class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        };
    }

    handelClick() {
        this.setState(({counter}, props) => {
            return {
                counter: counter + 1
            };
        });
    }
    render() {
        if (this.state.counter === 5) {
            throw new Error('i am crashed');
        } else {
            return (
                <div>
                    <label>
                        {
                            this.state.counter
                        }
                    </label>    
                    <input
                        id='add'    
                        type="button"
                        onClick={this.handelClick.bind(this)}
                    />
                </div>
            );
        }
    }
}
