import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="/"> Home </Link>
                <Link to='/users'> Users</Link>
                <Link to='/posts'> Posts</Link>
            </div>
        )
    }
}

export default Home