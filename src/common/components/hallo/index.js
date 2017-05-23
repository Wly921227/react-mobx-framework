import './style.less'

import React, { Component } from 'react'

import favicon from 'images/favicon.png'

class Hallo extends Component {
    render() {
        return <div className="text">
            Hallo world!!
            <img src={favicon} alt=""/>
        </div>
    }
}

module.exports = Hallo