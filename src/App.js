import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import CommentBox from './components/comment-box';
import store from './store/comments-store';

const App = () => (
  <Provider store = {store}>
    <div className="App">
      <CommentBox />
    </div>
  </Provider>

)
export default App;
