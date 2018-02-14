import * as actionTypes from '../actionTypes/loginStatus';

export const update = (data) => {
    return {
        type: actionTypes.USER_LOGIN,
        data
    };
};
