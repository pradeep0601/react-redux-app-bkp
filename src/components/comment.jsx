import React from "react";

const Comment = ({author, children}) => (
<div className="comment">
    <h2 className="comment-author">{author}</h2>
    {children}
</div>
);

export default Comment;
