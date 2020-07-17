import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
// import MetaPanel from './MetaPanel'

class Slidebar extends Component {
    render() {
        return (
            <Menu
                size="large"
                inverted
                fixed="left"
                vertical
                style={{
                    bankground: 'red',
                    fontSize: '1.2rem'
                }}>
                    Day la side bar
            </Menu>
        )
    }
}

export default Slidebar;
