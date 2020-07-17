import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div>
                <span> <a href="link"> All</a></span>
                {" | "}
                <span>  Uncompleted </span>
                {" | "}
                <span> Completed </span>
            </div>
        )
    }
}

export default Menu;
