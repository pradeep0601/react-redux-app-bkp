import React from 'react';
import './App.css';
import CommentList from "./components/CommentList";
import CommentsData from './data/CommentsData';

const App = () => (
<div className="App">
      <CommentList comments={CommentsData.comments}/>
    </div>
)
export default App;
