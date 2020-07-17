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
            createdAt: new Date().toLocaleString(),
            content: PropTypes.string,
        }).isRequired,
        editPost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <div>
                    <input type="checkbox" />
                    {this.props.createdAt}
                    17/07/2020
                </div>
                <div className="button-right">
                    <button>
                        <EditOutlined onClick={() => this.props.editPost(this.props.post.id)} />
                    </button>
                    <button>
                        <CloseOutlined onClick={() => this.props.deletePost(this.props.post.id)} />
                    </button>
                </div>
                <p>
                    {this.props.post.content}
                </p>
            </div >
        );
    }
}

export default Post;