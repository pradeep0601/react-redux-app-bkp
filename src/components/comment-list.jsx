import React from "react";
import Comment from './comment';

const CommentList = ({comments}) => (
    <div className='comment-list'>
    {comments && comments.map(({id, author, text}) => (
        <Comment key={id} author={author}>{text}</Comment>
    ))}
    </div>
)

export default CommentList;