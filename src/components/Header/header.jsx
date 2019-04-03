import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Header extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>Header</div>
        )
    }
}

export default Header;