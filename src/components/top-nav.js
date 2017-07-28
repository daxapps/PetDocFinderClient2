import React from 'react';
// import {Router, Route, Link} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import App from './app';
// import Vetlist from './vetlist';

import './top-nav.css';

export default function TopNav() {

    
    return (
     		<nav>
          <ul>
             <Link to="/">Home</Link> 
             <Link to="/vetlist">Vet List</Link> 
          </ul>
        </nav>
    
        
    );
};



