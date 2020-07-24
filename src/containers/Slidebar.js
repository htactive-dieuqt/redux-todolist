import React from 'react'
import { Menu } from 'semantic-ui-react'
// import MetaPanel from './MetaPanel'

const Slidebar = () => {
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
            Slidebar
        </Menu>
    )
}

export default Slidebar;
