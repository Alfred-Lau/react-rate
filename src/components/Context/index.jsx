import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render () {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: PropTypes.string
};

class Message extends React.Component {
    constructor (props, ctx) {
        super(props);
        // console.log('message');
        // console.log(ctx);
    }
    render () {
        return (
            <div>
                {this.props.text}
                <Button>
          Delete
                </Button>
            </div>
        );
    }
}


// TODO:注意：但凡想使用context的子组件一定需要加上如下的一部分，指出contextTypes！！！
Message.contextTypes = {
    color: PropTypes.string
};

class Context extends React.Component {
    constructor (props, ctx) {
        super(props);
        // console.log(ctx);
        this.state = {
            style: 'blue'
        };
        this.handleContext = this.handleContext.bind(this);
    }
    getChildContext () {
        return {color: 'purple'};
    }

    handleContext () {
        this.setState({
            style: 'red'
        });
    }

    render () {
        const children = this.props.messages.map((message) => <Message text={message.text} key={message.id} />
        );
        return <div>
            {children}
            <input type='button' onClick={this.handleContext} style={{color: this.state.style}} />
        </div>;
    }
}

Context.childContextTypes = {
    color: PropTypes.string
};
export default Context;
