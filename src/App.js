import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import CommentBox from './components/comment-box';
import store from './store/comments-store';

const App = () => (
  <Provider store = {store}>
    <div className="App">
      <Header />
      <CommentBox />
    </div>
  </Provider>

)
export default App;
