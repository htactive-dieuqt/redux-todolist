import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    EditOutlined,
    CloseOutlined
} from '@ant-design/icons';

class Post extends Component {
    static propTypes = {
        post: PropTypes.shape({
            id: PropTypes.number,
            content: PropTypes.string
        }).isRequired,
        editPost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <p>
                    { this.props.post.content }
                </p>
                <EditOutlined onClick={ () => this.props.editPost(this.props.post.id) } />
                <CloseOutlined onClick={ () => this.props.deletePost(this.props.post.id) } />
            </div>
        );
    }
}

export default Post;