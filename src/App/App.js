import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';

import '../App/app.less'

class App extends Component{
    render(){
        return(
            <div className="app">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;