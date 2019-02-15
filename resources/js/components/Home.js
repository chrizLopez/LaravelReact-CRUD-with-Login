import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            categories:[]
        }

    }
    
    componentDidMount()
    {
        axios.get('http://localhost:8000/users')
        .then(response => {
            this.setState({categories:response.data});
        });
    }

    render() {
        return (
            <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                {

                    this.state.categories.map(category=>{
                        return (
                            <tr key={'mykey' + category.id}>
                                <th scope="row">{category.id}</th>
                                <td>{category.name}</td>
                                <td>{category.address}</td>
                                <td>{category.email}</td>
                                <td>{category.gender}</td>
                                <td>{category.description}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
        );
    }
}