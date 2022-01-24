import styled from "styled-components";

const StyledButton = styled.button`
    border-radius: 0.5rem;
    border-color: black;
    padding: 0.75rem 1rem;
    border-width: 3px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;

    transition: all 75ms ease-out;
    &:hover {
        transform: translate(0, -2px);
    }

    display: flex;
    justify-content: center;

    ${props => props.disabled && `
        background-color: lightgray; 
        cursor: not-allowed; 
        color: black;
        &:hover {
            transform: translate(0, 0px);
        }
    `};
`

export default function Button({ onClick, isDisabled = false, className, children }) {

    return <StyledButton className={className} disabled={isDisabled} onClick={onClick}>{children}</StyledButton>
}