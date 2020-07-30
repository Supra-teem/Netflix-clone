import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './nav.css'

const Nav = props => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                handleShow(true)
            }
            else
                handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt="netflix logo"
                className="nav__logo" />

        </div>
    );
};

Nav.propTypes = {

};

export default Nav;