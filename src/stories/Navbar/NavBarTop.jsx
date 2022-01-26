import SearchBar from "../SearchBar/SearchBar";
import './Navbar.css'
import styled from "styled-components";

const DisplayWrapper = styled.div`
@media(max-width: 768px) {
    display: none;
}`

const NavBarContainer = styled.ul`
    display:flex;
    flex-wrap: nowrap;

  `;

function NavbarTop(props) {
    return (
        <DisplayWrapper>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">LOGO</a>
            <NavBarContainer className="nav navbar-nav">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            </NavBarContainer>
            <SearchBar></SearchBar>
            </div>
        </nav>
        </DisplayWrapper>
        
    );
}
export default NavbarTop;