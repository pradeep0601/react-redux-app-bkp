import actionTypes from './action-types';

const updateText = (text) => ({
    type: actionTypes.UPDATE_TEXT,
    text
});

export default updateText;