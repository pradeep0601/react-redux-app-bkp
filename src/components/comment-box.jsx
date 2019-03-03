import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import addComment from '../actions/add-comment';
import updateAuthor from '../actions/update-author';
import updateText from '../actions/update-text';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        const {target} = event;
        const {author, text} = target;
        const comment = {
            author: author.value,
            text: text.value
        }
        const {onAddComment} = this.props;
        onAddComment(comment);
    }

    render() {
        const {comments, author, text, onUpdateAuthor, onUpdateText} = this.props;

        return(
            <div className="comment-box">
                <CommentForm
                   author={author} 
                    text={text} 
                    onFormSubmit={(e) => this.onSubmitForm(e)}
                    onAuthorUpdate={() => onUpdateAuthor}
                    onTextUpdate={() => onUpdateText}
                />
                <h1>Comments</h1>
                <CommentList comments={comments}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
        {
            comments: state.comments,
            author: state.author,
            text: state.text
        }
    );

const mapDispatchToProps = (dispatch) => (
    {
        onAddComment: (comment)=> dispatch(addComment(comment)),
        onUpdateAuthor: (author)=> dispatch(updateAuthor(author)),
        onUpdateText: (text)=> dispatch(updateText(text))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);