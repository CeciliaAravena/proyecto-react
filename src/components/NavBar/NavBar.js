import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Switch from 'react-bootstrap/Switch'
import CartWidget from '../CartWidget/CartWidget'
import Inicio from "../pages/Inicio/Inicio";
import Envios from "../pages/Envios/Envios";
import Contacto from "../pages/Contacto/Contacto";
import Recursos from "../pages/Recursos/Recursos";
import Publicidad from "../pages/Servicios/Publicidad/Publicidad"
import Fotografia from "../pages/Servicios/Fotografia/Fotografia"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

export default function NavBar() {
  return (
      <div>
          <BrowserRouter>
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Container>
                  <Navbar.Brand href="/">SERVICIOS DIGITALES</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                          <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                              <NavDropdown.Item href="/Servicios/publicidad" >Publicidad</NavDropdown.Item>
                              <NavDropdown.Item href="/Servicios/fotografia" >Fotografia</NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href="/envios">Envios</Nav.Link>
                          <Nav.Link href="/contacto">Contacto</Nav.Link>
                      </Nav>
                      <Nav>
                          <CartWidget/>
                      </Nav>
                  </Navbar.Collapse>
                  </Container>
              </Navbar>
              <Switch>
                  <Routes>
                      <Route path='/' element={<Inicio/>} />
                      <Route path='/envios' element={<Envios/>} />
                      <Route path='/recursos' element={<Recursos/>} />
                      <Route path='/contacto' element={<Contacto/>} />
                      <Route path='/servicios/publicidad' element={<Publicidad />} />
                      <Route path='/servicios/fotografia' element={<Fotografia/>} />
                      <Route path='/comprar/:itemId' element={<ItemDetailContainer />} />    
                  </Routes>
              </Switch>
          </BrowserRouter>
      </div>
  )
}