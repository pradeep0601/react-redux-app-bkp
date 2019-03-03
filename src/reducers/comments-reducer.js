import {clone, remove} from 'lodash';

import actionTypes from "../actions/action-types";
import commentsData from '../data/comments-data';

const initialState = {
    comments: commentsData.comments,
    author: '',
    text: '',
}

const deleteComment = (comments, id) =>{
    const tempComments = clone(comments);
    const updatedComments = remove(tempComments, (tempComment) => tempComment.id === id);
    return updatedComments;
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
        case actionTypes.DELETE_COMMENT:
            return (
                {
                    ...state,
                    comments: deleteComment(state.comments, action.id)

                }
            );
        default:
        return state;
    }
}

export default commentsReducer;