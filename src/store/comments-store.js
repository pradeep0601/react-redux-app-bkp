import {createStore} from 'redux'
import commentsReducer from '../reducers/comments-reducer';

const store = createStore(commentsReducer);

export default store;