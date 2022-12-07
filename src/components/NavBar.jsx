import Brand from '../assets/images/icons/brand.png';
import CartWidget from './CartWidget.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Container>

          <div> 
            <Navbar.Brand href="#home"><Link to='/'><img src={ Brand }/></Link></Navbar.Brand> {/* <----------//_Brand logo_//----------> */}
          </div>

          <div>  {/* <----------//_*START* Navbar buttons_//----------> */}     
            <Nav className="me-auto">

              <div className='px-5'> 
              <Nav.Link href=""><Link to='/' className='text-decoration-none '>Home</Link></Nav.Link>
              </div>

              <div className='px-5'> 
                <Nav.Link href="">Tasaciones</Nav.Link>
              </div>

              <NavDropdown title="Catálogo" id="collasible-nav-dropdown" className='px-5'>

                <div> 
                  <DropdownButton 
                      key={'end'}
                      id={`dropdown-button-drop-${'end'}`}
                      drop={'end'}
                      variant="light"
                      title={` Aros `}
                      className="BgColorWhite NoBorder text-center"
                      >
                      <Dropdown.Item eventKey="1">Oro</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Plata</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Acero</Dropdown.Item>
                      <Dropdown.Item eventKey="4">Todos</Dropdown.Item>
                  </DropdownButton>
                </div>

                <div>
                  <DropdownButton
                      key={'end'}
                      id={`dropdown-button-drop-${'end'}`}
                      drop={'end'}
                      variant="light"
                      title={` Anillos `}
                      className="BgColorWhite NoBorder text-center" 
                      >
                      <Dropdown.Item eventKey="5">Oro</Dropdown.Item>
                      <Dropdown.Item eventKey="6">Plata</Dropdown.Item>
                      <Dropdown.Item eventKey="7">Plata y oro</Dropdown.Item>
                      <Dropdown.Item eventKey="8">Todos</Dropdown.Item>
                  </DropdownButton>
                </div>

                <DropdownButton
                    key={'end'}
                    id={`dropdown-button-drop-${'end'}`}
                    drop={'end'}
                    variant="light"
                    title={` Cadenas `}
                    className="BgColorWhite NoBorder text-center" 
                    >
                    <Dropdown.Item eventKey="9">Oro</Dropdown.Item>
                    <Dropdown.Item eventKey="10">Plata</Dropdown.Item>
                    <Dropdown.Item eventKey="11">Plata y oro</Dropdown.Item>
                    <Dropdown.Item eventKey="12">Enchapado en oro</Dropdown.Item>
                    <Dropdown.Item eventKey="13">Acero</Dropdown.Item>
                    <Dropdown.Item eventKey="14">Todos</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    key={'end'}
                    id={`dropdown-button-drop-${'end'}`}
                    drop={'end'}
                    variant="light"
                    title={` Collares `}
                    className="BgColorWhite NoBorder text-center" 
                    >
                    <Dropdown.Item eventKey="15">Oro</Dropdown.Item>
                    <Dropdown.Item eventKey="16">Plata</Dropdown.Item>
                    <Dropdown.Item eventKey="17">Acero</Dropdown.Item>
                    <Dropdown.Item eventKey="18">Todos</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    key={'end'}
                    id={`dropdown-button-drop-${'end'}`}
                    drop={'end'}
                    variant="light"
                    title={` Dijes `}
                    className="BgColorWhite NoBorder text-center" 
                    >
                    <Dropdown.Item eventKey="19">Oro</Dropdown.Item>
                    <Dropdown.Item eventKey="20">Plata</Dropdown.Item>
                    <Dropdown.Item eventKey="21">Acero</Dropdown.Item>
                    <Dropdown.Item eventKey="22">Todos</Dropdown.Item>
                </DropdownButton>

              </NavDropdown>

              <div className='px-5'>
                <Nav.Link href="">Contacto</Nav.Link> 
              </div> 

            </Nav>
          </div> {/* <----------//_*END* Navbar buttons_//----------> */}

          <div>
            <CartWidget />  {/* <----------//_Cart Widget_//----------> */}
          </div>

        </Container>

    </Navbar>
  );
}

export default NavBar;
