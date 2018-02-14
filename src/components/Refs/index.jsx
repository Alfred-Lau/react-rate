import React from 'react';

class CustomTextInput extends React.Component {
    handleRefs () {
        // console.log('i am clicked');
    }
    render () {
        return (
            <div>
                <input ref='customer' />
            </div>
        );
    }
}
class Parent extends React.Component {
    componentWillReceiveProps() {
        // console.log('child- willreceive');
    }
    render () {
        return (
            <div>
        My input:
                <CustomTextInput ref={this.props.inputRef} />
            </div>
        );
    }
}

class Grandparent extends React.Component {
    constructor (props, ctx) {
        super(props);
        // console.log(ctx);
        this.state = {
            name:'before change.'
        };
    }
    componentWillMount() {
        // console.log('will-mount');
    }
    componentDidMount () {
        // console.log('didmount');
    }

    componentWillUpdate() {
        // console.log('will-update');
    }
    shouldComponentUpdate() {
        return true;
    }
    componentWillUnmount() {
        // console.log('will-unmount');
    }
    componentDidUpdate() {
        // console.log('did-update');
    }
    render() {
        return (
            <div>
                <input
                    type="button"
                    onClick={(e) => {
                        this.setState({
                            name:'hello'
                        });
                    }} />    
                <Parent
                    inputRef={el => this.inputElement = el}
                    name={this.state.name}
                />
            </div>
        );
    }
}

export default Grandparent;
