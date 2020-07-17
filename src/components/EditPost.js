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
                content: PropTypes.string,
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
                            <CloseOutlined />
                        </button>
                    </div>

                    <textarea required rows="5" cols="90"
                        ref={(input) => this.getContent = input}
                        defaultValue={this.props.post.content}
                        placeholder="Enter Post Content" />
                </form>
            </div>
        );
    }
}

export default EditPost;