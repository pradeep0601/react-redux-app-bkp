import actionTypes from './action-types';

const addComment = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    comment
});

export default addComment;