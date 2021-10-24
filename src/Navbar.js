// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <>
//             <div className="container-fluid nav-bg">
//                 <div className="row">
//                     <div className="col-12 mx-auto">
//                         <nav className="navbar navbar-expand-lg navbar-light ">
//                             <a className="navbar-brand text-white" href="#">Tinkering Lab</a>
//                             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>

//                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                 <ul className="navbar-nav mx-auto">
//                                     <li className="nav-item " activeClassName="menu_active">
//                                         <NavLink exact activeClassName="menu_active"  className="nav-link mx-3  text-white"  to="/Tinkering-lab-IITJAMMU">Mission and Vision </NavLink>
//                                     </li>
//                                     <li className="nav-item">
//                                         <NavLink activeClassName="menu_active" className="nav-link mx-2 text-white"  to="/Tinkering-lab-IITJAMMU/events">Events</NavLink>
//                                     </li>
//                                     <li className="nav-item ">
//                                         <NavLink activeClassName="menu_active" className="nav-link mx-2 text-white"  to="/Tinkering-lab-IITJAMMU/team">Team </NavLink>
//                                     </li>
//                                     <li className="nav-item">
//                                         <NavLink activeClassName="menu_active" className="nav-link mx-2 text-white "  to="/Tinkering-lab-IITJAMMU/contact">Contact Us</NavLink>
//                                     </li>
//                                 </ul>

//                             </div>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar;



import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tinkering Lab</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <NavLink exact activeClassName="menu_active"  className="nav-link"  to="/Tinkering-lab-IITJAMMU">Mission and Vision </NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link"  to="/Tinkering-lab-IITJAMMU/events">Events</NavLink>
                            </li>
                            
                            <li class="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link"  to="/Tinkering-lab-IITJAMMU/team">Team </NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link "  to="/Tinkering-lab-IITJAMMU/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;