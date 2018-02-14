import * as actionTypes from '../actionTypes/loginStatus';


const stateInitial = {};
export default (state = stateInitial, actions) => {
    switch (actions.type) {
    case actionTypes.USER_LOGIN:
        return actions.data;
    default:
        return state;
    }
};
