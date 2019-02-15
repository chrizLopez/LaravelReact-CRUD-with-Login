import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return (
            <div>
	            <div className="card">
	  				<div className="card-body">
						<form>
							<h1> Upload Profile</h1>
							<input className="fome-control" type="file" />
							<button className="btn btn-primary" type="submit">Upload</button>
						</form>
					</div>
				</div>
            </div>
        );
    }
}