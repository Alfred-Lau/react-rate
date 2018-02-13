import React from 'react';
import './style.css';

//droplist
class List extends React.Component {
    constructor (props, ctx) {
        super(props);
    }
    render () {
        const data = this.props.items;
        return (
            <ul className='items'>
                {data.map((item,index) => {
                    return (
                        <li
                            className="item"
                            key={index}
                        >{item}</li>
                    );
                })}
            </ul>
        );
    }
}

export default List;
