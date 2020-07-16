import React, { Component } from 'react'

import Slidebar from './containers/Slidebar'
import AllPostContainer from './containers/AllPostContainer'
import PostFormContainer from './containers/PostFormContainer'
import MetaPanel from './containers/MetaPanel'

import { Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Grid columns="equal" className="app" style={{ background: '#eee' }}>
        <Slidebar />

        <Grid.Column style={{ background: 'red', width: 320,  height: 'max-content', float: 'left' }}>
          <MetaPanel />
        </Grid.Column>

        <Grid.Column style={{ marginLeft: 320 }}>
          <PostFormContainer />
          <AllPostContainer />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;