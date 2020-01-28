import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './pages/Home'
import Users from './pages/Users'
import Posts from './pages/Posts'
import UserData from './component/UserData'
import PostData from './component/PostData'

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component ={Home} />
                    <Route path='/users' exact={true} component ={Users} />
                    <Route path='/posts' exact={true} component ={Posts} />
                    <Route path='/users/:id' exact={true} component={UserData} />
                    <Route path='/posts/:id' exact={true} component={PostData} />
                </div>
            </BrowserRouter>
            
        )
    }
}

export default Router