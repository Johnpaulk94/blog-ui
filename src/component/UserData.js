import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserData extends React.Component {
    constructor() {
        super()
        this.state = {
            user: '',
            posts: []
        }
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <h1>USER NAME : {this.state.user}</h1>
                <h2> POSTS WRITTEN BY THE USER </h2>
                <br />
                <ul>
                    {
                        this.state.posts.map((post) => {
                            return (
                                <li key ={post.id}>
                                    <Link to={`/posts/${post.id}`}> {post.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
        )
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then ((response => {
                const user = response.data.name
                console.log(response.data.name)
                this.setState({user})
                
            }))

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
            .then((response => {
                const posts= response.data
                this.setState({posts})
                console.log(posts)
            }))
            
    }
}

export default UserData