// import logo from '../../assets/images/logo.png'
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './Header.scss'

const Header = () => {
    return (
        <>
            <div className='nav-header sticky-navigation'>
                <Navbar bg="header" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            {/* <img
                                src={logo}
                                width="30"
                                height="30"
                                // className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                                className="d-lg-none"
                            /> */}
                            <span className='brand-name d-lg-none'>CÔNG TY CỔ PHẦN ĐẦU TƯ ĐIỆN LỰC 3</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink exact to="/" className='nav-link'>Trang chủ</NavLink>
                                <NavLink exact to="/nhansu" className='nav-link'>Nhân sự</NavLink>
                                {/* <NavLink to="/roles" className='nav-link'>Roles</NavLink>
                                <NavLink to="/group-role" className='nav-link'>Group-Role</NavLink>
                                <NavLink to="/projects" className='nav-link'>Projects</NavLink>
                                <NavLink to="/about" className='nav-link'>About</NavLink> */}
                            </Nav>
                            {/* <Nav>
                                {user && user.isAuthenticated
                                    ?
                                    <>
                                        <Nav.Item className='nav-link'>
                                            Welcome {user.account.username}!
                                        </Nav.Item>
                                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                                            <NavDropdown.Item>Change Password</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item>
                                                <span onClick={() => handleLogOut()}>Log out</span>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                    :
                                    <Link className='nav-link' to='/login'>
                                        Login
                                    </Link>
                                }
                            </Nav> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Header