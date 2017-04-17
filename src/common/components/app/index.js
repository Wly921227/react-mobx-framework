const React = require('react')
const PropType = require('prop-types')

class App extends React.Component {

    static propTypes = {
        children: PropType.object.isRequired
    }

    render() {
        return <div>
            <h1>Demo App</h1>
            {this.props.children}
        </div>
    }
}

module.exports = App