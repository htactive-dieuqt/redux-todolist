import React from 'react'
// import { Grid, Segment } from 'semantic-ui-react'
import AddPost from './components/AddPost'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Slidebar from './containers/Slidebar'
import { addPost } from './actions/PostActions'
import AllPostContainer from './containers/AllPostContainer'
import MetaPanel from './containers/MetaPanel'

import './App.css'

class App extends React.Component {
  static propTypes = {
    addPost: PropTypes.func.isRequired
  }
  
  render() {
    return (
      <div className="container">
        <div className="side-bar">
          <Slidebar />
        </div>

        <div className="content">
          <AddPost addPost={this.props.addPost} />
          <AllPostContainer />
        </div>

        <div className="meta-panel">
          <MetaPanel />
        </div>
      </div >
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (content) => {
      dispatch(addPost(content));
    }
  }
};


export default connect(null, mapDispatchToProps)(App)