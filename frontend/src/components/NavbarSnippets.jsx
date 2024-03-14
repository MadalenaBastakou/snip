import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavbarSnippets() {
  const navigate = useNavigate();

  const logout = async() => {
   await axios.get("http://localhost:3020/logout")
    navigate("/login")
  }


  return (
    <Navbar bg="light" data-bs-theme="light" className="d-flex ">
      <Container fluid>
        <Navbar.Brand className="logo ms-2">&lt;SnipRepo&gt;</Navbar.Brand>
        <Navbar.Brand>
          <a href={"/dashboard"} className="links-snippets">
            Dashboard
          </a>
        </Navbar.Brand>
        <Navbar.Brand>
          <a href={"/mysnippets"} className="links-snippets">
            My Snippets
          </a>
        </Navbar.Brand>
        <Navbar.Brand>
        <a href={"/newsnippet"} className="links-snippets">
            Add new snippet
          </a>
        </Navbar.Brand>
        <Navbar.Collapse className="logo justify-content-center ms-5">
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button
            className="logout-btn"
            onClick={logout}
            style={{ marginLeft: "15px" }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSnippets;
