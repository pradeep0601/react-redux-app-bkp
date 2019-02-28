import ActionTypes from './action-types';

const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    comment
});

export default addComment;