import React from 'react'
// import { Grid, Segment } from 'semantic-ui-react'

import Slidebar from './containers/Slidebar'
import AllPostContainer from './containers/AllPostContainer'
import PostFormContainer from './containers/PostFormContainer'
import MetaPanel from './containers/MetaPanel'
import Menu from './containers/Menu'

import './App.css'

const App = () => (
  <div className="container">
    <div className="side-bar">
      <Slidebar />                                                                       
    </div>

    <div className="content">
      <PostFormContainer />
      <div className="menu">
        <Menu />
      </div>
      <AllPostContainer />
    </div>

    <div className="meta-panel">
      <MetaPanel />
    </div>
  </div >
)

export default App;