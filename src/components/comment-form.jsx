import React from 'react';

const CommentForm = (props) => (
        <form className="comment-form" onSubmit={(e)=> props.onFormSubmit(e)}>
            <input type="text" name="author" placeholder="Your name"  onChange={(e)=>props.onAuthorUpdate(e.target.value)}/>
            <input type="text" name="text" placeholder="Say something..." onChange={(e)=>props.onTextUpdate(e.target.value)}/>
            <button type="submit">Post</button>
        </form>
        );

export default CommentForm;