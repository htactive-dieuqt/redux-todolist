import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import * as PostActions from '../actions/PostActions';

import {
    EditOutlined,
    CloseOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';

class Post extends Component {
    static propTypes = {
        post: PropTypes.shape(
            {
                id: PropTypes.number,
                content: PropTypes.string,
                // createdAt: new Date().toLocaleString(),
            }
        ).isRequired,
        editPost: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <div>
                    <input type="checkbox"
                        checked={this.props.post.complete}
                    />
                    {/* {this.props.createdAt} */}
                    {console.log('rứa đố mi file ni thì răng')}
                    22/07/2020
                </div>
                <div className="button-right">
                    <button>
                        <EditOutlined onClick={this.editPost(this.props.post.id)} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(PostActions, dispatch)
    }
}

export default connect(mapDispatchToProps)(Post);