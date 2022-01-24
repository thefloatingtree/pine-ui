import styled from "styled-components"


const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;

    transition: all 75ms ease-in-out;
    opacity: ${ props => props.open ? '0.25' : '0' };
    ${props => !props.open && `visibility: hidden;`}
    
`

export default function ModalOverlay({ _isOpen }) {
    return (
        <StyledDiv open={_isOpen} ></StyledDiv>
    )
}