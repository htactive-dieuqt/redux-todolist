import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditPost from './EditPost';
import Post from './Post';
// import CheckBoxDel from './CheckBoxDel'

class AllPost extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    render() {
        return (
            <div className="posts">
                {
                    this.props.posts.map((post) => (
                        <div className="post" key={post.id}>
                            {post.editing
                                ? <EditPost post={post}
                                    key={post.id}
                                    updatePost={this.props.actions.updatePost}
                                    deletePost={this.props.actions.deletePost}
                                />
                                : <Post post={post}
                                    key={post.id}
                                    editPost={this.props.actions.editPost}
                                    deletePost={this.props.actions.deletePost}
                                />
                            }
                        </div>
                    ))
                }
                <input type="checkbox"/> Check all
                <button> Delete </button>
            </div>
        );
    }
}

export default AllPost;