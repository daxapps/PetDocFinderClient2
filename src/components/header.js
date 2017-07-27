import React from 'react';
// import {connect} from 'react-redux';

import TopNav from './top-nav';
import Banner from './banner.jpg';
import './header.css';

export function Header() {

    return (
        <header>
            <TopNav />
            <h1>Pet Doc Finder</h1>
            <h2>Find the best veterinarian for your loved one</h2>
            <img src={Banner} alt="cute pupies and kittens"></img>
        </header>
    );
};


export default Header;
