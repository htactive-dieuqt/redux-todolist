import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';

class EditPost extends Component {
    static propTypes = {
        post: PropTypes.shape(
            {
                id: PropTypes.number,
                content: PropTypes.string
            }
        ).isRequired,
        updatePost: PropTypes.func.isRequired
    };

    handleEdit = (e) => {
        e.preventDefault();
        const id = this.props.post.id;
        const newContent = this.getContent.value;
        this.props.updatePost(id, newContent);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <textarea required rows="5" cols="20"
                        ref={(input) => this.getContent = input}
                        defaultValue={this.props.post.content}
                        placeholder="Enter Post Content" />
                    <br />
                    <button>
                        <CheckOutlined  />
                    </button>
                    <button>
                        <CloseOutlined />
                    </button>
                </form>
            </div>
        );
    }
}

export default EditPost;