import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home/home'

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path={["/", "/home"]} exact component={Home} />
            </div>
        )
    }
}

export default Routes;