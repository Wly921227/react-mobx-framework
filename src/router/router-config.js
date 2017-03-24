const config = {
    path: '/',
    component: require('common/components/app'),
    indexRoute: { component: require('common/components/hallo') },
    childRoutes: [
        {
            path: '/test',
            component: require('pages/TestUser')
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