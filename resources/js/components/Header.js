import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';
import User from './User';

export default class Header extends Component {
    render() {
        return (
        	<Router>
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">	
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/signup">Sign Up</Link>
						</li>
						<li className="nav-item">
            				<Link className="nav-link" to="/login">Login</Link>
						</li>
					</ul>
				</div>
			</nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/user" component={User} />
            </div>
            </Router>
        );
    }
}