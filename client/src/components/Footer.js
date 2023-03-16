import React from "react";
import { Nav, Navbar, Container, Button, Form } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTelephoneInbound } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

import "./footer.css";

export default function Footer() {
  return (
    <Navbar id="contacts" className="navbar" expand="lg" bg="dark">
      <Container className="containerTilte">
        <h2 className="textColorW">Contacts</h2>
        <Container className="containerLinks">
          <a
            target="_blank"
            href="https://www.instagram.com/carlosmariotoromartinez/"
            id="linkB"
          >
            <FaInstagram />
            {"  "}
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/carlos-mario-toro-martinez-484a72238/"
            id="linkB"
          >
            <FaLinkedin />
            {"  "}
            Linkedin
          </a>
          <a
            target="_blank"
            href="https://github.com/carlosM-toro-martinez"
            id="linkB"
          >
            <FaGithub />
            {"  "}
            Github
          </a>
        </Container>
      </Container>
      <p id="paragraph">
        <BsTelephoneInbound />
        {"  "}
        Phone Number: 78635209
      </p>
      <p id="paragraph">
        <GrMail />
        {"  "}
        mail: carlostorom.96@gmail.com
      </p>
      <p className="textColorW">Send me mail here</p>
      <Container id="containerFormCl">
        <Form className="formCl">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Enter your email</Form.Label>
            <Form.Control type="email lg" placeholder="example@gmail.com" />
          </Form.Group>

          <Form.Group className="mb-3 lg" controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>Text</Form.Label>
            <Form.Control as="textarea" placeholder="Leave a message here" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
      <hr style={{ color: "white" }} />
      <p className="textColorW">
        {" "}
        <BiCopyright /> {"  "} Copyright 2023 . All right reserved
      </p>
    </Navbar>
  );
}
