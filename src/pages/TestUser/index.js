const React = require('react')

const $http = require('common/http')

class Test extends React.Component {

    componentWillMount() {
        this.setState({
            users: []
        })
        $http.post({
            url: '/auth/login',
            data: {
                uname: 'admin',
                upassword: 'admin'
            }
        }).then(data => {
            console.log(data)
        })
        $http.get({
            url: '/test/getUser',
            data: {
                uId: 1
            }
        }).then(data => {
            this.setState({
                users: data.result
            })
        })
    }

    render() {
        let users = this.state.users.map(value => {
            return <div key={value.u_id} className="user">
                <div className="id">{value.u_id}</div>
                <div className="name">{value.u_name}</div>
                <div className="nickname">{value.u_nickname}</div>
            </div>
        })

        return <div className="users">
            {users}
        </div>
    }

}

module.exports = Test
