import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown,ButtonGroup } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { AiOutlineUser} from "react-icons/ai";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar id="nav" collapseOnSelect expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
          <Navbar.Brand id="brand" href="/">GABORAS</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Piyasa" id="navbarScrollingDropdown">
              <NavDropdown.Item  href="#piyasa1">Piyasa1</NavDropdown.Item>
              <NavDropdown.Item href="#piyasa2">Piyasa2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#piyasa3">Piyasa3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="İhaleler" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#ihaleler1">İhaleler1</NavDropdown.Item>
              <NavDropdown.Item href="#ihaleler2">İhaleler2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Varlık Yönetimi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#varlik1">
                Varlık Yönetimi1
              </NavDropdown.Item>
              <NavDropdown.Item href="#varlik2">
                Varlık Yönetimi2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ButtonGroup id="buttons"> 
              <AiOutlineUser style={{height:40,color:"#011729"}} />
            <Button id="buttonlogin" variant="light"  to="/login">
              Giriş Yap
            </Button>
            <span>/</span>
            <Button id="buttonlogin" variant="light"  to="/signup">
              Kaydol
            </Button>
          </ButtonGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}



export default Header;
