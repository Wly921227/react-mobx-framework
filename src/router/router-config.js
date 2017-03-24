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
        // { path: 'child', component: Child },
        // {
        //     path: 'inbox',
        //     component: Inbox,
        //     childRoutes: [{
        //         path: 'messages/:id',
        //         onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
        //     }]
        // },
        // {
        //     component: Inbox,
        //     childRoutes: [{
        //         path: 'messages/:id', component: Message
        //     }]
        // }
    ]
}

module.exports = config