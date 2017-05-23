import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const Routers = require('./router')

const Component = require('common/components/hallo')

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('main')
    )
}

render(Routers)

if (module.hot) {
    module.hot.accept('./router', () => {
        const NextApp = require('./router');
        render(NextApp)
    });
}