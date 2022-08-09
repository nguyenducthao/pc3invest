import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink, useHistory } from "react-router-dom"
import './Header.scss'
import { logout } from "../../redux/actions/userAction"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Header = (props) => {
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const { user: currentUser } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentUser) {
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
            setShowAdminBoard(false)
        }
    }, [currentUser]);
    const logOut = () => {
        dispatch(logout(currentUser.id))
    };
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
                                {showAdminBoard &&
                                    <NavLink exact to="/admin" className='nav-link'>Admin board</NavLink>
                                }
                                {/* <NavLink to="/roles" className='nav-link'>Roles</NavLink>
                                <NavLink to="/group-role" className='nav-link'>Group-Role</NavLink>
                                <NavLink to="/projects" className='nav-link'>Projects</NavLink>
                                <NavLink to="/about" className='nav-link'>About</NavLink> */}
                            </Nav>
                            <Nav>
                                {currentUser
                                    ?
                                    <>
                                        <Nav.Item className='nav-link'>
                                            Xin chào {currentUser.username}!
                                        </Nav.Item>
                                        <NavDropdown title="Cài đặt" id="basic-nav-dropdown">
                                            <NavDropdown.Item>Đổi mật khẩu</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item>
                                                <span onClick={() => logOut()}>Đăng xuất</span>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                    :
                                    <Link className='nav-link' to='/dang-nhap'>
                                        Đăng nhập
                                    </Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Header