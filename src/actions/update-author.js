import actionTypes from "./action-types";

const updateAuthor = (author) => ({
    type: actionTypes.UPDATE_AUTHOR,
    author
});

export default updateAuthor;