import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
import { useTranslation } from 'react-i18next';

function NavBar(props) {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Selected language
    </Tooltip>
  );
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const swapLanguage = () => {
    if (i18n.language === 'en'){
      changeLanguage('fr');
    } else {
      changeLanguage('en');
    }
  }

  return (
    <Router>
      <>
        <Navbar className='navbar'>
          <Container>
            <Nav className="links">
              <Nav.Link as={Link} to={"/about"}>{t('nav_about')}</Nav.Link>
              <Nav.Link as={Link} to={"/services"}>{t('nav_services')}</Nav.Link>
            </Nav>
            <Nav className='brandLogo'>
              <Navbar.Brand as={Link} to={"/home"}>
                <img src={myLogo}/>
              </Navbar.Brand>
            </Nav>
            <Nav className='links2'>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Nav.Link onClick={() => swapLanguage()}>{t('nav_langage')}</Nav.Link>
              </OverlayTrigger>
              <Nav className='buttonBook'>
                <Nav.Link as={Link} to={"/book"}>
                  <Button bsStyle="primary">{t('nav_book')}</Button>
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
