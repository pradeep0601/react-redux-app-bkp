import actionTypes from "../actions/action-types";
import commentsData from '../data/comments-data';

const initialState = {
    comments: commentsData.comments,
    author: '',
    text: '',
}

const commentsReducer = (state=initialState, action) => {
   // const newState = {...state};
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            return (
                {
                    ...state,
                    comments: [...state.comments, {
                        id: Math.random(),
                        ...action.comment
                    }]

                }
            );
        case actionTypes.UPDATE_AUTHOR:
            return (
                {
                    ...state,
                    autthor: action.autthor
                }
            );
        case actionTypes.UPDATE_TEXT:
            return (
                {
                    ...state,
                    text: action.text
                }
            );
        default:
        return state;
    }
}

export default commentsReducer;