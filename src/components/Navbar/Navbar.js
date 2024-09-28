import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import ContactImg from "../../assets/contact.png";
import Menu from "../../assets/menu.png";

const Navbar = () => {
     const [showMenu, setShowMenu] = useState(false);
     return (
          <nav className="navbar">
               <img src={logo} alt="logo" className="logo" />
               <div className="desktopMenu">
                    <Link
                         activeClass="active"
                         to="intro"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}
                         className="desktopMenuListItem"
                    >
                         Home
                    </Link>
                    <Link
                         activeClass="active"
                         to="skills"
                         spy={true}
                         smooth={true}
                         offset={-50}
                         duration={500}
                         className="desktopMenuListItem"
                    >
                         About
                    </Link>
                    <Link
                         activeClass="active"
                         to="work"
                         spy={true}
                         smooth={true}
                         offset={-50}
                         duration={500}
                         className="desktopMenuListItem"
                    >
                         Portfolio
                    </Link>
                    {/* <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link> */}
               </div>
               <button
                    className="desktopMenuBtn"
                    onClick={() => {
                         document
                              .getElementById("contact")
                              .scrollIntoView({
                                   behavior: "smooth",
                                   offset: "-100",
                              });
                    }}
               >
                    <img src={ContactImg} alt="" className="desktopMenuImg" />
                    Contact me
               </button>
               <img
                    src={Menu}
                    alt="Menu"
                    className="mobMenu"
                    onClick={() => setShowMenu(!showMenu)}
               />
               <div
                    className="NavMenu"
                    style={{ display: showMenu ? "flex" : "none" }}
               >
                    <Link
                         activeClass="active"
                         to="intro"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}
                         onClick={() => setShowMenu(false)}
                         className="listItem"
                    >
                         Home
                    </Link>
                    <Link
                         activeClass="active"
                         to="skills"
                         spy={true}
                         smooth={true}
                         offset={-50}
                         duration={500}
                         onClick={() => setShowMenu(false)}
                         className="listItem"
                    >
                         About
                    </Link>
                    <Link
                         activeClass="active"
                         to="work"
                         spy={true}
                         smooth={true}
                         offset={-50}
                         duration={500}
                         onClick={() => setShowMenu(false)}
                         className="listItem"
                    >
                         Portfolio
                    </Link>
                    {/* <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)} className="listItem">Clients</Link> */}
                    <Link
                         activeClass="active"
                         to="contact"
                         spy={true}
                         smooth={true}
                         offset={-50}
                         duration={500}
                         onClick={() => setShowMenu(false)}
                         className="listItem"
                    >
                         Contact
                    </Link>
               </div>
          </nav>
     );
};

export default Navbar;
