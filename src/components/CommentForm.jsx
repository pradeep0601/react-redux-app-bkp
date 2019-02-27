import React from 'react';
import CommentsData from '../data/CommentsData';

const submitForm = (event) => {
    event.preventDefault();
    const {target} = event;
    CommentsData.comments.push({
        author: target.elements.author.value,
        text: target.elements.text.value
    });
}

const CommentForm = () => (
    <form className="comment-form" onSubmit={submitForm}>
    <input type="text" name="author" placeholder="Your name" />
    <input type="text" name="text" placeholder="Say something..." />
    <button type="submit">Post</button>
    </form>
)

export default CommentForm;