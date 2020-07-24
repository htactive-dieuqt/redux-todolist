import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { addPost } from '../actions/PostActions'

const PostForm = () => {

    const [content, setContent] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        setContent('')
        const action = addPost(content)
        dispatch(action);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    className="input-post"
                    type="text"
                    placeholder="Type here for add a new todo"
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />
                <br />
            </form>
        </div>
    );
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default PostForm;