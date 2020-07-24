import React from 'react';
import PropTypes from 'prop-types';

import {
    CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { updateCheck, updatePost, deletePost } from '../actions/PostActions'

const EditPost = (props) => {

    const { post } = props

    const dispatch = useDispatch();

    const handleCheck = (id) => {
        const action = updateCheck(id)
        dispatch(action);
    }

    const handleUpdatePost = (id, newContent) => {
        const action = updatePost(id, newContent)
        dispatch(action);
    }

    const handleDeletePost = (id) => {
        const action = deletePost(id)
        dispatch(action);
    }

    return (
        <div>
            <div>
                <input type="checkbox"
                    onChange={() => handleCheck(post.id)}
                    checked={post.complete}
                />
                23/07/2020
            </div>
            <div className="button-right">
                <button>
                    <CheckOutlined onClick={() => handleUpdatePost(post.id)} />
                </button>
                <button>
                    <CloseOutlined onClick={() => handleDeletePost(post.id)} />
                </button>
            </div>
            <textarea required rows="5" cols="90"
                defaultValue={post.content}
                onClick={() => this.updatePost(post.id)}
                placeholder="Enter Post Content" />
        </div >
    );
}

EditPost.propTypes = {
    post: PropTypes.shape(
        {
            id: PropTypes.number,
            content: PropTypes.string,
        }
    ).isRequired
};

export default EditPost;