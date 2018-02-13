import React, { Component } from 'react';

export default class Fragment extends Component {
    render() {
        return (
            // 不新增节点的方式
            <React.Fragment>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </React.Fragment>
        );
    }
}
