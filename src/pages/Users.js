import React from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    render() {
        return (
            <div>
                <h2>Listing Users - {this.state.users.length}</h2>
                <ul>
                    {
                    this.state.users.map((user)=> {
                        return (
                            <li key={user.id}>
                                <Link to={`/users/${user.id}`} >{user.name}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            const users = response.data
            this.setState({users})
        })

    }
}

export default Users