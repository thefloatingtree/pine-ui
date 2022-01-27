import styled from "styled-components"

const DropdownContentContainer = styled.div`
    position: absolute;

    transition: all 75ms ease-in-out;
    opacity: ${ props => props.open ? '1' : '0' };
`

export default function PopoverContent({ _isOpen, children }) {

    return (
        <DropdownContentContainer open={_isOpen}>
            {children}
        </DropdownContentContainer>
    )
}