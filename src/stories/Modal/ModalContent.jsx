import { useRef } from "react"
import styled from "styled-components"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    cursor: pointer;

    transition: all 150ms ease-in-out;
    ${props => !props.open && `visibility: hidden;`}
`

const StyledInnerContainer = styled.div`
    cursor: auto;
    overflow-y: auto;
    max-height: 95vh;

    transition: all 125ms ease-in-out;
    opacity: ${ props => props.open ? '1' : '0' };
    transform: ${ props => props.open ? 'scale(1)' : 'scale(0.95)' };
`

export default function ModalContent({ children, _onModalClose, _isOpen }) {
    const containerRef = useRef()
    useOnClickOutside(containerRef, _onModalClose)

    return (
        <StyledContainer open={_isOpen} >
            <StyledInnerContainer ref={containerRef} open={_isOpen} >{children}</StyledInnerContainer>
        </StyledContainer>
    )
}