import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark' className='mt-2 mb-2 rounded'>
        <Container>
          <Navbar.Brand>Waiter.app</Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;