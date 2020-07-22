import React, { Component } from 'react';
import { Tabs } from 'antd'
import { connect } from 'react-redux';
import AllPost from '../components/AllPost';
// import { bindActionCreators } from 'redux';
// import * as PostActions from '../actions/PostActions';

const { TabPane } = Tabs;

class AllPostContainer extends Component {
    render() {
        return (
            <Tabs type="card" tabPosition='right' >
                <TabPane tab="All" key="1" >
                    <AllPost
                        posts={this.props.posts}
                       
                    />
                </TabPane>
                <TabPane tab="Uncompleted" key="2">
                    <AllPost
                        posts={(this.props.posts.filter(post => post.complete === false))}
                       
                    />
                </TabPane>
                <TabPane tab="Completed" key="3">
                    <AllPost
                        posts={this.props.posts.filter(post => post.complete === true)}
                        
                    />
                </TabPane>
            </Tabs>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators(PostActions, dispatch)
//     }
// }

export default connect(mapStateToProps)(AllPostContainer);