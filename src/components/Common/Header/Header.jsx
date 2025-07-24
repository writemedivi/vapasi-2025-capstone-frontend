import { useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";

const Header = (props) => {
    const {screen = "default"} = props;
     const navigate = useNavigate();
    return(
    <Navbar bg="primary" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">🏠 VW Home Loan</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>
                    {/* <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => navigate("/faqs")}>FAQs</Nav.Link>
                    {/* <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
                </Nav>
                <Nav >
                    {screen == "home"  || screen =="signup" || screen =="login" ? 
                    (<Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>) : 
                    (<Nav.Link onClick={() => navigate("/")}>Logout</Nav.Link>)
                    
                }
                    
                    {/* <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default Header; 