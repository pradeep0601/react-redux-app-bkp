import actionTypes from './action-types';

const deleteComment = (id) => ({
    type: actionTypes.DELETE_COMMENT,
    id
});

export default deleteComment;