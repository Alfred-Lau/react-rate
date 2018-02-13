import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// // Children component
// class Children extends React.Component {
//     constructor (props, context) {
//         super(props, context);

//         this.state = {
//             name: this.context.name
//         };
//     }

//     render () {
//         return (
//             <ul>
//                 <li>
//                     {`child context is: ${this.context.age}`} 
//                 </li>
//                 <li>
//                     {`state from context: ${this.state.name}`} 
//                 </li>
//                 <li>
//                     {`print age: ${this.context.print(this.context.age)}`} 
//                 </li>
//             </ul>
//         );
//     }
// }

// Children.contextTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     print: PropTypes.func
// };

// // Parent component
// class Parent extends React.Component {
//     getChildContext () {
//         return {
//             name: 'mars',
//             age: 18
//         };
//     }

//     render () {
//         return (
//             <div>
//                 {`from App component: ${this.context.name}`} 
//                 <div>
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// }

// Parent.contextTypes = {
//     name: PropTypes.string
// };
// Parent.childContextTypes = {
//     age: PropTypes.number,
//     name: PropTypes.string
// };

// // App component
// class App extends React.Component {
//     getChildContext () {
//         return {
//             name: 'mars',
//             print: (m) => m
//         };
//     }

//     render () {
//         return (
//             <Parent>
//                 <Children />
//             </Parent>
//         );
//     }
// }

// App.childContextTypes = {
//     name: PropTypes.string,
//     print: PropTypes.func
// };


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
