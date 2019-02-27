import React from "react";
import Comment from './Comment';

const CommentList = ({comments}) => (
    <div className='comment-list'>
    {comments.map(({author, id, text}) => (
        <Comment author={author} key={id}>{text}</Comment>
    ))}
    </div>
)

export default CommentList;