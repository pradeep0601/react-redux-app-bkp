import React from 'react';
import './App.css';
import CommentList from "./components/CommentList";
import CommentsData from './data/CommentsData';
import CommentForm from './components/CommentForm';

const App = () => (
<div className="App">
      <div className="comment-box">
      <CommentList comments={CommentsData.comments}/>
      <CommentForm />
      </div>
    </div>
)
export default App;
