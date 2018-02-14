import React, { Component } from 'react';


export default class RenderProps extends Component {
    render() {
        return (
            <div
                render={data => (
                    <h1>{data}</h1>    
                )}    
            >
        RenderProps
            </div>
        );
    }
}
