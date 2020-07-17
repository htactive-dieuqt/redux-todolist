import React from 'react'
// import { Grid, Segment } from 'semantic-ui-react'

import Slidebar from './containers/Slidebar'
import AllPostContainer from './containers/AllPostContainer'
import PostFormContainer from './containers/PostFormContainer'

import './App.css'

const App = () => (
  <div className="container">
    <div className="side-bar">
      <Slidebar />
    </div>

    <div className="content">
      <PostFormContainer />
      <AllPostContainer />
    </div>

    <div className="meta-panel">
      Meta
    </div>
  </div >
)

export default App;