import './style.less'

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import State from './state'

@observer
class Test extends React.Component {

    componentWillMount() {
        let app = new State()
        this.setState({app: app})
        setTimeout(() => {
            this.state.app.name = 'Moyu'
            this.state.app.age = 16
        }, 2000)
    }

    render() {
        let {
            name,
            age
        } = this.state.app

        return <div className="users">
            <div>{name}</div>
            <div>{age}</div>
        </div>
    }

}

module.exports = Test
