require('common/style.less')

let React = require('react')
let ReactDOM = require('react-dom')
let Routers = require('./router')

ReactDOM.render(
    <Routers/>,
    document.getElementById('main')
)

if (module.hot) {
    module.hot.accept('./router', () => {
        const NextApp = require('./router');

        ReactDOM.render(
            <NextApp/>,
            document.getElementById('main')
        );
    });
}