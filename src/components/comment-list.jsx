import React from "react";
import {Table} from 'react-bootstrap';
import Comment from './comment';


const CommentList = ({comments}) => (
    <Table bordered striped>
    <thead>
    <tr>
    <th>Author</th><th>Comment</th><th>Operation1</th><th>Operation2</th>
    </tr>
    </thead>
    <tbody>
    {comments && comments.map((comment) => (
        <Comment key={comment.id} comment = {comment} />
    ))}
    </tbody>
    </Table>
)

export default CommentList;