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
        updatePost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired,
        updateCheck: PropTypes.func.isRequired
    };

    handleEdit = (e) => {
        e.preventDefault();
        const id = this.props.post.id;
        const newContent = this.getContent.value;
        this.props.updatePost(id, newContent);
    }

    handleCheck = (id) => {
        console.log(id, "hchdshfds")
        this.props.updateCheck({ id })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="checkbox"
                        onClick={() => console.log("dieuba dien")}
                        checked={this.props.post.complete}
                    />
                    {this.props.post.createdAt}
                    {console.log("Đố diệu hắn có vô file")}
                </div>
                <form onSubmit={this.handleEdit}>
                    <div className="button-right">
                        <button>
                            <CheckOutlined />
                        </button>
                        <button>
                            <CloseOutlined onClick={() => this.props.deletePost(this.props.post.id)} />
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