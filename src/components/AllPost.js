import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditPost from './EditPost';
import Post from './Post';

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
                            {
                                (post.editing)
                                    ? <EditPost post={post}
                                        key={post.id}
                                        updatePost={this.props.updatePost}
                                        deletePost={this.props.deletePost}
                                        updateCheck={this.props.updateCheck}
                                    />
                                    : <Post post={post}
                                        key={post.id}
                                        editPost={this.props.editPost}
                                        deletePost={this.props.deletePost}
                                    />
                            }
                        </div>
                    ))
                }
                <input type="checkbox" /> Check all
                <button> Delete </button>
            </div>
        );
    }
}

export default AllPost;