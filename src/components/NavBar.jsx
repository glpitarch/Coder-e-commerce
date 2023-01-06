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
            <Link to='/'><img src={ Brand }/></Link>{/* <----------//_Brand logo_//----------> */}
          </div>

          <div>  {/* <----------//_*START* Navbar buttons_//----------> */}     
            <Nav className="me-auto">

              <div className='px-5 mt-2'> 
                <Link to='/' className='text-decoration-none text-light'>Home</Link>
              </div>

              <div className='px-5 text-decoration-none text-light mt-2'> 
                Tasaciones
              </div>
              
              <NavDropdown title="Catálogo" id="collasible-nav-dropdown" className='px-5 text-decoration-none'>

                <div> 
                  <DropdownButton 
                      key={'1'}
                      id={`dropdown-button-drop-${'end'}`}
                      drop={'end'}
                      variant="light"
                      title={` Aros `}
                      className="BgColorWhite NoBorder text-center"
                      >
                      <Dropdown.Item eventKey="1"><Link to='/categoria/aros/oro' className='text-body text-decoration-none'>Oro</Link></Dropdown.Item>
                      <Dropdown.Item eventKey="2"><Link to='/categoria/aros/plata' className='text-body text-decoration-none'>Plata</Link></Dropdown.Item>
                      <Dropdown.Item eventKey="3"><Link to='/categoria/aros/acero' className='text-body text-decoration-none'>Acero</Link></Dropdown.Item>
                      <Dropdown.Item eventKey="4"><Link to='/categoria/aros' className='text-body text-decoration-none'>Todos</Link></Dropdown.Item>
                  </DropdownButton>
                </div>

                <div>
                  <DropdownButton
                      key={'2'}
                      id={`dropdown-button-drop-${'end'}`}
                      drop={'end'}
                      variant="light"
                      title={` Anillos `}
                      className="BgColorWhite NoBorder text-center" 
                      >
                      <Dropdown.Item eventKey="5"><Link to='/categoria/anillos/oro' className='text-body text-decoration-none'>Oro</Link></Dropdown.Item>
                      <Dropdown.Item eventKey="6"><Link to='/categoria/anillos/plata' className='text-body text-decoration-none'>Plata</Link></Dropdown.Item>
                      <Dropdown.Item eventKey="7"><Link to='/categoria/anillos/plata-oro' className='text-body text-decoration-none'>Plata y oro</Link></Dropdown.Item>
                      <Dropdown.Item eventKey="8"><Link to='/categoria/anillos' className='text-body text-decoration-none'>Todos</Link></Dropdown.Item>
                  </DropdownButton>
                </div>

                <DropdownButton
                    key={'3'}
                    id={`dropdown-button-drop-${'end'}`}
                    drop={'end'}
                    variant="light"
                    title={` Cadenas `}
                    className="BgColorWhite NoBorder text-center" 
                    >
                    <Dropdown.Item eventKey="9"><Link to='/categoria/cadenas/oro' className='text-body text-decoration-none'>Oro</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="10"><Link to='/categoria/cadenas/plata' className='text-body text-decoration-none'>Plata</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="11"><Link to='/categoria/cadenas/plata-oro' className='text-body text-decoration-none'>Plata y oro</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="12"><Link to='/categoria/cadenas/enchapado-oro' className='text-body text-decoration-none'>Enchapado en oro</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="13"><Link to='/categoria/cadenas/acero' className='text-body text-decoration-none'>Acero</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="14"><Link to='/categoria/cadenas' className='text-body text-decoration-none'>Todos</Link></Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    key={'4'}
                    id={`dropdown-button-drop-${'end'}`}
                    drop={'end'}
                    variant="light"
                    title={` Collares `}
                    className="BgColorWhite NoBorder text-center" 
                    >
                    <Dropdown.Item eventKey="15"><Link to='/categoria/collares/oro' className='text-body text-decoration-none'>Oro</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="16"><Link to='/categoria/collares/plata' className='text-body text-decoration-none'>Plata</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="17"><Link to='/categoria/collares/acero' className='text-body text-decoration-none'>Acero</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="18"><Link to='/categoria/collares' className='text-body text-decoration-none'>Todos</Link></Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    key={'5'}
                    id={`dropdown-button-drop-${'end'}`}
                    drop={'end'}
                    variant="light"
                    title={` Dijes `}
                    className="BgColorWhite NoBorder text-center" 
                    >
                    <Dropdown.Item eventKey="19"><Link to='/categoria/dijes/oro' className='text-body text-decoration-none'>Oro</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="20"><Link to='/categoria/dijes/plata' className='text-body text-decoration-none'>Plata</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="21"><Link to='/categoria/dijes/acero' className='text-body text-decoration-none'>Acero</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="22"><Link to='/categoria/dijes' className='text-body text-decoration-none'>Todos</Link></Dropdown.Item>
                </DropdownButton>

              </NavDropdown>

              <div className='px-5 text-decoration-none text-light mt-2'>
                Contacto
              </div> 

            </Nav>
          </div> {/* <----------//_*END* Navbar buttons_//----------> */}

          <div>
            <Link to='/cart'><CartWidget /></Link>  {/* <----------//_Cart Widget_//----------> */}
          </div>

        </Container>

    </Navbar>
  );
}

export default NavBar;
