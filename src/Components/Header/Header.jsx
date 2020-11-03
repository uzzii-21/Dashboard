import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Header = (props) => {

    return (
        <nav className="navbar">
            <Container>
                <div className="nav_title">
                    <h1>Dash<strong>board</strong></h1>
                </div>
                <div className="dropdown">
                    <Dropdown options={props.options} onChange={props.onChange} value={props.value} placeholder="Select an option" />
                </div>
            </Container>
        </nav>
    )
}

export default Header;

