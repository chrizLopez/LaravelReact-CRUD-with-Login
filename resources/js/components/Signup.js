import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'

export default class Signup extends Component {
	constructor() {
		super();
		this.state = {
			fullname: '',
			address: '',
			gender: '',
			description: '',
			email_add: '',
			password: '',
			user_type_id: 0,
			redirect: false
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onSubmit(e){
		e.preventDefault();
		axios.post('http://localhost:8000/users/store',this.state)
		.then(() => this.setState({ redirect: true }));
	}
    
    render() {
    	const { redirect } = this.state;

    	if (redirect) {
	       return <Redirect to='/'/>;
	    }

        return (
            <div>
            <div className="card">
  				<div className="card-body">
					<form onSubmit={this.onSubmit}>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Name</label>
									<input type="text" name="fullname" className="form-control" onChange={this.handleInputChange}
            value={this.state.fullname}></input>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>User Type</label>
									<select name="user_type_id" className="form-control" onChange={this.handleInputChange}
            value={this.state.user_type_id}>
										<option value="0">Select...</option>
										<option value="1">Admin</option>
										<option value="2">Normal User</option>
									</select>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<label>Address</label>
									<input type="text" name="address" className="form-control" onChange={this.handleInputChange}
            value={this.state.address}></input>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Gender</label>
									<select name="gender" className="form-control" onChange={this.handleInputChange}
            value={this.state.gender}>
										<option>......</option>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Description</label>
									<input name="description" type="text" className="form-control" onChange={this.handleInputChange}
            value={this.state.description}></input>
								</div>
							</div>

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