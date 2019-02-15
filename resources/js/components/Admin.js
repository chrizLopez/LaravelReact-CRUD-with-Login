import React, { Component } from 'react';
import axios from 'axios';
import { Button, Nav, NavItem, NavDropDown, MenuItem, Carousel, ButtonToolbar, Modal } from 'react-bootstrap';

export default class Admin extends Component {
    constructor(){
        super();
        this.state={
            users:[],
            show: false,
            show2: false,
            fullname: '',
            address: '',
            gender: '',
            description: '',
            email_add: '',
            password: '',
            user_id: 0,
        }

        this.smallstyle = {color: 'red'};
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8000/users/update/',this.state)
        .then(response => {
            this.componentDidMount()
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleClose2(confirmDel) {
        if (confirmDel == 1) {
            axios.get('http://localhost:8000/users/delete/'+this.state.user_id)
            .then(response => {this.componentDidMount()});
        }
        this.setState({ show2: false });
    }

    handleShow2(id) {
        this.setState({ show2: true, user_id:id });
    }

    handleShow(id) {
        axios.get('http://localhost:8000/users/'+id)
        .then(response => {
            this.setState({
                fullname:response.data.name,
                address:response.data.address,
                gender:response.data.gender,
                description:response.data.description,
                email_add:response.data.email,
                password:response.data.password,
                user_id:response.data.id,
                show: true
            });
        });
    }
    
    componentDidMount()
    {
        axios.get('http://localhost:8000/users')
        .then(response => {
            this.setState({users:response.data});
        });
    }

    render() {
        return (
            <div>

            <Modal size="sm" show={this.state.show2} onHide={() => this.handleClose2(0)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">                 
                        <Button variant="secondary" onClick={() => this.handleClose2(0)}>
                            Cancel
                        </Button>
                        <Button variant="warning" onClick={() => this.handleClose2(1)}>
                            Delete
                        </Button>
                    </div>      
                </Modal.Body>
            </Modal>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.onSubmit}>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" 
                                        name="fullname" 
                                        className="form-control" 
                                        onChange={this.handleInputChange}
                                        value={this.state.fullname}>
                                    </input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Address</label>
                                    <input 
                                        type="text" 
                                        name="address" 
                                        className="form-control" 
                                        onChange={this.handleInputChange}
                                        value={this.state.address}>
                                    </input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select 
                                    name="gender" 
                                    className="form-control" 
                                    onChange={this.handleInputChange}
                                    value={this.state.gender}>
                                        <option>Select......</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Description</label>
                                    <input 
                                        name="description" 
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.handleInputChange}
                                        value={this.state.description}>
                                    </input>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input 
                                        name="email_add" 
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.handleInputChange}
                                        value={this.state.email_add}>
                                    </input>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>New Password <br /><small style={this.smallstyle}>leave empty if you don't want to change</small></label>
                                    <input 
                                        name="password" 
                                        type="password" 
                                        className="form-control" 
                                        onChange={this.handleInputChange}
                                        value={this.state.password}>
                                    </input>
                                </div>
                            </div>
                            <input 
                                name="user_id" 
                                type="hidden" 
                                onChange={this.handleInputChange}
                                value={this.state.user_id}>
                            </input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>


            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {

                    this.state.users.map(user=>{
                        return (
                            <tr key={'mykey' + user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.description}</td>
                                <td>
                                	<button className="btn btn-sm btn-info" onClick={() => this.handleShow(user.id)}>Edit</button>
                                	<button className="btn btn-sm btn-warning" onClick={() => this.handleShow2(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>);
    }
}