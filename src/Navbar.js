import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <a className="navbar-brand text-white" href="#">Tinkering Lab</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item " activeClassName="menu_active">
                                        <NavLink exact activeClassName="menu_active"  className="nav-link mx-3  text-white"  to="/">Mission and Vision </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link mx-2 text-white"  to="/about">Events</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink activeClassName="menu_active" className="nav-link mx-2 text-white"  to="/service">Team </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link mx-2 text-white "  to="/contact">Contact Us</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;