import React from "react";
import {Button} from 'react-bootstrap';

const Comment = ({comment}) => (
    <tr className="comment">
        <td>{comment.author}</td>
        <td>{comment.text}</td>
        <td><Button>Edit</Button></td>
        <td><Button>Delete</Button></td>
    </tr>
);

export default Comment;
