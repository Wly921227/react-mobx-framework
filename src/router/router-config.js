const config = {
    routes: [
        {
            path: '/',
            component: require('common/components/hallo')
        },
        {
            path: '/test',
            component: require('pages/TestUser')
        }
    ],
    onError: {
        path: '*',
        component: require('common/components/404')
    }
}

module.exports = config