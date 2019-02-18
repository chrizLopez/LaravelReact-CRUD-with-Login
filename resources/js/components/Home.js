import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from "react-table";

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            categories:[]
        }
        this.onSort = this.onSort.bind(this)

    }

    onSort(event, sortKey){
        const data = this.state.categories;
        data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
        this.setState({data})
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
                        <th scope="col" onClick={e => this.onSort(e, 'name')}>Name</th>
                        <th scope="col" onClick={e => this.onSort(e, 'address')}>Address</th>
                        <th scope="col" onClick={e => this.onSort(e, 'email')}>Email</th>
                        <th scope="col" onClick={e => this.onSort(e, 'gender')}>Gender</th>
                        <th scope="col" onClick={e => this.onSort(e, 'description')}>Description</th>
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