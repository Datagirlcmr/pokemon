import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/holding.jpeg";

function NavBarBootstrap() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <h1>POKEDEX</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarBootstrap;
