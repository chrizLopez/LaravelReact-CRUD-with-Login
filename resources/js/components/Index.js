import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ReactDOM from 'react-dom';

export default class Index extends Component {
    render() {
        return (
                <div className="container">
                    <Header />
                </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
