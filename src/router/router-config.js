const config = {
    routes: [
        {
            path: '/',
            component: require('common/components/hallo')
        }
    ],
    onError: {
        path: '*',
        component: require('common/components/404')
    }
}

module.exports = config