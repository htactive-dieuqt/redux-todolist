import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PostForm extends Component {
    static propTypes = {
        addPost: PropTypes.func.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const content = this.getContent.value
        this.props.addPost(content)
        this.getContent.value = ''
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        required
                        className="input-post"
                        type="text"
                        placeholder="Type here for add a new todo"
                        ref={(input) => this.getContent = input} />
                    <br />
                </form>
            </div>
        );
    }
}

export default PostForm;