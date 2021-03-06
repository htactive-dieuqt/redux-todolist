import React from 'react';
import PropTypes from 'prop-types';

import {
    EditOutlined,
    CloseOutlined
} from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { updateCheck, editPost, deletePost } from '../actions/PostActions'

const Post = (props) => {
  
    const { post, isEdit } = props
    console.log(isEdit, 'isEdit, setEdit');
    const dispatch = useDispatch();
    

    const handleCheck = (id) => {
        const action = updateCheck(id)
        dispatch(action);
    }

    const handleEditPost = (id) => {
        const action = editPost(id)
        dispatch(action);
        console.log('đã vào handle edit post với id ', id);
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
                    <EditOutlined onClick={() => handleEditPost(post.id)} />
                </button>
                <button>
                    <CloseOutlined onClick={() => handleDeletePost(post.id)} />
                </button>
            </div>
            <p>
                {post.content}
            </p>
        </div >
    );
}

Post.propTypes = {
    post: PropTypes.shape(
        {
            id: PropTypes.number,
            content: PropTypes.string,
        }
    ).isRequired
};

export default Post;


