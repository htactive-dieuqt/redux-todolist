import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';

// import { useDispatch } from 'react-redux'
// import { updatePost, deletePost } from '../actions/PostActions'

class EditPost extends Component {
    static propTypes = {
        post: PropTypes.shape(
            {
                id: PropTypes.number,
                content: PropTypes.string,
            }
        ).isRequired,
        updatePost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
    };

    handleEdit = (e) => {
        const id = this.props.post.id;
        const newContent = this.getContent.value;
        this.props.updatePost(id, newContent);
    }

    handleDeletePost = (id) => {
        this.props.deletePost(id)
    }

    render() {
        return (
            <div>
                <div>
                    <input type="checkbox" />
                    {this.props.post.createdAt}
                </div>
                <form onSubmit={this.handleEdit}>
                    <div className="button-right">
                        <button>
                            <CheckOutlined />
                        </button>
                        <button>
                            <CloseOutlined onClick={() => this.handleDeletePost(this.props.post.id)} />
                        </button>
                    </div>

                    <textarea required rows="5" cols="90"
                        ref={(input) => this.getContent = input}
                        defaultValue={this.props.post.content}
                        onClick={() => this.handleEdit(this.props.post.id)}
                        placeholder="Enter Post Content" />
                </form>
            </div>
        );
    }
}

export default (EditPost);