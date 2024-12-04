import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/farm2.png';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img alt="" src={logo} className="d-inline-block align-top" />{' '} */}
            IFFeiras
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#feiras">Feiras</Nav.Link>
              <Nav.Link href="#clientes">Clientes</Nav.Link>
              <Nav.Link href="#propriedades">Propriedades</Nav.Link>
              <Nav.Link href="#propriedades">Cultivos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
