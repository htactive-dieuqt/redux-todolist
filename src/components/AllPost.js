import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    DeleteOutlined
} from '@ant-design/icons';

import EditPost from './EditPost';
import Post from './Post';

const AllPost = (props) => {

    const { posts } = props
    const [isEdit, setEdit] = useState(false)

    return (
        <>
            {
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        {
                            (!isEdit)
                                ? <Post post={post} />
                                : <EditPost post={post} />
                        }
                    </div>
                ))
            }
            <input type="checkbox" /> Check all {''}
            <button>
                <DeleteOutlined />
            </button>
        </>
    )
}

AllPost.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default AllPost;