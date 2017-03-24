const React = require('react')

class App extends React.Component {

    render() {
        return <div>
            <h1>Demo App</h1>
            {this.props.children}
        </div>
    }
}

module.exports = App