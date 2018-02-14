import React from 'react';
import './style.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Page from '../Page';

// droplist
class List extends React.Component {
    constructor (props, ctx) {
        super(props);
        this.state = {
            data: [1, 2, 3]
        };
    }
    render () {
        const data = this.state.data;
        const match = this.props.match;
        return (
            <div>
                <ul className='items'>
                    {data.map((item, index) => {
                        return (
                            <li className='item' key={index}>
                                <Link to={`${match.url}/${index}`}>
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <Route path={`${match.url}/:id`} component={Page}></Route>
                <Route exact path={match.url} render={() => (
                    <h1>请选择一个列表项</h1>
                )} />
            </div>
        );
    }
}

export default List;
