import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import carlos from "..//public/carlos.jpg";
import "./header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img
          src={carlos}
          style={{
            borderRadius: "100%",
            width: 100,
            display: "flex",
            justifyContent: "center",
          }}
        />
        <h2
          style={{
            color: "white",
            marginLeft: 20,
            fontFamily: "Apple Chancery, cursive",
          }}
        >
          Carlos Toro{"  "} ✅
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ display: "flex" }}>
            <Nav.Link className="linkButtons" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="linkButtons" href="/proyect">
              Proyects
            </Nav.Link>
            <Nav.Link className="linkButtons" href="#contacts">
              Contacts
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar
    //   collapseOnSelect
    //   expand="lg"
    //   bg="dark"
    //   variant="dark"
    //   className="justify-content-end"
    // >
    //   <Container className="justify-content-end">
    //     <Navbar.Brand href="/" className="justify-content-end">
    //       React-Bootstrap
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse
    //       className="justify-content-end"
    //       id="responsive-navbar-nav "
    //     >
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/proyect">Proyects</Nav.Link>
    //         <Nav.Link href="/contact">Contacts</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}
