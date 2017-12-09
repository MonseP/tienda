import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Routes} from './routes';
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>

                <div>
                    <Routes />
                </div>
            </div>
        );
    }
}

export default App;