import React from "react";
import PropTypes from 'prop-types';

Comment.PropTypes = {
    author: PropTypes.string,
    children: PropTypes.string
}

const Comment = (props) => (
<div className="comment">
    <h2 className="comment-author">{props.author}</h2>
    {props.children}
</div>
);

export default Comment;
