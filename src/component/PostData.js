import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostData extends React.Component {
    constructor() {
        super()
        this.state = {
            user:{},
            post: {},
            comments: []
        }
    }
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                <h1>USER NAME : {this.state.user.name}</h1>
                <h2> TITLE: {this.state.post.title} </h2>
                <br />
                <h2> BODY : {this.state.post.body} </h2>
                <hr />
                <h2> COMMENTS</h2>
                <ul>
                    {
                        this.state.comments.map((comment) => {
                            return <li key={comment.id}> {comment.name}</li>
                        })
                    }
                </ul>
                <hr />
                <h3>More posts of author:<Link to={`/users/${this.state.user.id}`}>{this.state.user.name}</Link></h3>
            </div>
        )
    }

    componentDidMount() {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then((response => {
                const post= response.data
                console.log(post)
                axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then((response => {
                        const user=response.data
                        this.setState({post,user})
                    }))
                    .catch((err) => {
                        alert(err)
                    })
            }))
            .catch((err) => {
                alert(err)
            })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`)
            .then((response => {
                const comments = response.data
                this.setState({comments})
                console.log(comments)
            }))
    }
}

export default PostData