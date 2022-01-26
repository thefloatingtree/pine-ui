import './SearchBar.css'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  position: relative;
  display: block;
  padding: 10px 15px;
  line-height: 20px;
  float:right;

  @media(max-width: 768px) {
    display: none;
  }
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Search..."></input>
      <button>Search</button>
    </SearchBarContainer>
  );
}
//add js functionality

export default SearchBar;
