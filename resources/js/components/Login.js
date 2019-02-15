import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			email_add: '',
			password: '',
			redirect: 0
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onSubmit(e){
		e.preventDefault();
		axios.post('http://localhost:8000/login',this.state)
		.then(res => this.setState({ redirect: res.data.user_type_id }));
	}

    render() {   
    	const { redirect } = this.state; 	
    	if (redirect == 1) {
	       return <Redirect to='/admin'/>;
	    }else if (redirect == 2) {
	       return <Redirect to='/user'/>;
	    }
        return (
            <div>
            <div className="card">
  				<div className="card-body">
					<form onSubmit={this.onSubmit}>
						<div className="row">

							<div className="col-md-6">
								<div className="form-group">
									<label>Email address</label>
									<input name="email_add" type="text" className="form-control" onChange={this.handleInputChange}
            value={this.state.email_add}></input>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Password</label>
									<input name="password" type="password" className="form-control" onChange={this.handleInputChange}
            value={this.state.password}></input>
								</div>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</form>
  				</div>
  			</div>

            </div>
        );
    }
}