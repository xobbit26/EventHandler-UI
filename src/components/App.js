import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

class App extends Component{
    render(){
        return(
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;