import React from 'react';
// import {connect} from 'react-redux';

import './top-nav.css';

export class TopNav extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a className="" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="" href="#">
                            Vet List
                        </a>
                    </li>
                    <li>
                        <a className="" href="#">
                            Signup
                        </a>
                    </li>
                     <li>
                        <a className="" href="#">
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default TopNav;

