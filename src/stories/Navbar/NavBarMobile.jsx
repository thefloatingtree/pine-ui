import './Navbar.css'
import styled from "styled-components";

const NavBarMoblileContainer = styled.div`
@media(min-width: 768px) {
    display: none;
}
    width: 100%;
    margin-bottom: 0px;
     position: fixed;
     bottom: 0;
     display: flex;
    flex-wrap: nowrap;
    align-content: center;
     `;

const NavBarMobile = styled.ul`
display: flex;
flex-wrap: nowrap;
width: 100%;     

justify-content: center;

  `;

function NavbarMobile(props) {
    return (
        
       
            <NavBarMoblileContainer className="container-fluid navbar navbar-default">
            <NavBarMobile className="nav navbar-nav">
            <li ><a href="#">Link</a></li>
            <li ><a href="#">Link</a></li>
            </NavBarMobile>
            <li><a className="navbar-brand" href="#">LOGO</a></li>
            <NavBarMobile className="nav navbar-nav">
            <li ><a href="#">Link</a></li>
            <li ><a href="#">Link</a></li>
            </NavBarMobile>
            </NavBarMoblileContainer>
        
        
    );
}
export default NavbarMobile;