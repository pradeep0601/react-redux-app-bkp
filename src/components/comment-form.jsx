import React from 'react';
import {Button, Form, Col} from 'react-bootstrap';

const CommentForm = (props) => (
    <Form  onSubmit={(e)=> props.onFormSubmit(e)}>
        <Form.Row>
            <Col>
                <Form.Control type="text" name="author" placeholder="Your name"  onChange={(e)=>props.onAuthorUpdate(e.target.value)}/>
            </Col>
            <Col>
                <Form.Control type="text" name="text" placeholder="Say something..." onChange={(e)=>props.onTextUpdate(e.target.value)}/>
            </Col>
            <Button variant="primary" type="submit">Post</Button> 
        </Form.Row>
    </Form>
    );

export default CommentForm;