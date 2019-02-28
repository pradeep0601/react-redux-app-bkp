import ActionTypes from "./action-types";

const updateAuthor = (author) => ({
    type: ActionTypes.UPDATE_AUTHOR,
    author
});

export default updateAuthor;