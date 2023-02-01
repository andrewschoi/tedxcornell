import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"

import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import logo from "../assets/darklogo.png";
import "./Nav.css";


function TopNav(props) {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Past Events", href: "/past-events" },
    { title: "Our Story", href: "/our-story" },
    // { title: "Sponsor Us", href: "/sponsor" },
    { title: "Apply", href: "/apply" },
    { title: "FAQ", href: "/faq" },
  ]

  return <Navbar bg="dark" variant="dark" expand="lg">
    <Container >
      <Navbar.Brand href="/" style={{ width: "40%" }}>
        <Image className="pt-1" id="logo" src={logo} alt="Image not rendering" fluid></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
        <Nav className="pr-3 ">
          {navItems.map(navItem =>
            navItem.dropdown ?
              <Dropdown as={NavItem} className="px-3 text-white">
                <Dropdown.Toggle className="text-white" as={NavLink}>{navItem.title}</Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  {
                    navItem.dropdown.map(year =>
                      <Dropdown.Item href={`/events/${year}`} className='text-center text-white'>{year}</Dropdown.Item>
                    )
                  }
                </Dropdown.Menu>
              </Dropdown> :
              navItem.button ? <div className="px-3"><Button variant="danger" href={navItem.href} target="_blank" >{navItem.title}</Button></div>
                :
                <Nav.Link className="px-3 text-white" href={navItem.href}>{navItem.title}</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

}

export default React.memo(TopNav);
