import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './Header.scss';
import '../../styles/_variables.scss';

export default class Header extends Component {
    handleClick = () => {
        const navbar = document.querySelector('.navbar-collapse');
        navbar.classList.toggle('show');
    }
    render() {
        return (
            <header className='navbar navbar-expand-lg'>
                <div className="container">
                    <NavLink to='home' className="navbar-brand">
                        {'Jonathan Gonzalez'}
                    </NavLink>

                    <button className="navbar-toggler" onClick={this.handleClick} type="button" data-toggle="collapse"
                            data-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink to="/experience" className="nav-link smoothScroll">
                                    Introduction
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/education" className="nav-link smoothScroll">
                                    Resume
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link smoothScroll">
                                    My Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link smoothScroll">
                                    Contact Me
                                </NavLink>
                            </li>
                        </ul>
                
                        <div className="mt-lg-0 mt-3 mb-4 mb-lg-0">
                            <a href="https://jonathangonzalezbotero.s3.ap-southeast-2.amazonaws.com/Resume_Jonathan_Gonzalez.pdf" className="custom-btn btn" download target="_blank" rel="noreferrer">Download CV</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
