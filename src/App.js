import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Routes} from './routes';
import Footer from './components/footer/Footer';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <Routes />

            </div>
        );
    }
}

export default App;