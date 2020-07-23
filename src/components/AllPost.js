import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditPost from './EditPost';
import Post from './Post';

class AllPost extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
    };

    state = {
        isEditing: false,
    }

    render() {
        const { isEditing } = this.state

        // if (isEditing) {
        //     return (
        //         this.props.posts.map((post) => (
        //             <div className="post" key={post.id}>
        //                 <EditPost post={post}
        //                 />
        //             </div>
        //         ))
        //     )
        // } else {
        //     return (
        //         this.props.posts.map((post) => (
        //             <div className="post" key={post.id}>
        //                 <Post post={post} />
        //             </div>
        //         ))
        //     )
        // }

        return (
            this.props.posts.map((post) => (
                <div className="post" key={post.id}>
                    {
                        (isEditing)
                            ? <EditPost post={post} />
                            : <Post post={post} />
                    }
                </div>
            )
            )
        )

    }
}

export default AllPost;