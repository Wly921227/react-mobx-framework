const config = {
    path: '/',
    getComponent: (nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('common/components/app'))
        }, 'app')
    },
    indexRoute: {
        getComponent: (nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('common/components/hallo'))
            }, 'hallo')
        }
    },
    childRoutes: [
        {
            path: '/test',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/TestUser'))
                }, 'TestUser')
            }
        }
    ]
}

module.exports = config