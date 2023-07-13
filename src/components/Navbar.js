import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Home from "./Home";
import Book from "./Book";
import myLogo from './logo.png';
import './styles.css';

function NavBar(props) {
  return (
    <Router>
      <>
        <Navbar className='navbar'>
          <Container>
            <Nav className="links">
              <Nav.Link as={Link} to={"/about"}>ABOUT</Nav.Link>
              <Nav.Link as={Link} to={"/services"}>SERVICES</Nav.Link>
            </Nav>
            <Nav className='brandLogo'>
              <Navbar.Brand as={Link} to={"/home"}>
                <img src={myLogo}/>
              </Navbar.Brand>
            </Nav>
            <Nav className='links2'>
              <Nav.Link href="#lang">FR</Nav.Link>
              <Nav className='buttonBook'>
                <Nav.Link as={Link} to={"/book"}>
                  <Button bsStyle="primary">Book now</Button>
                </Nav.Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </>
      <div>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;
