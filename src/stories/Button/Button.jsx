import styled from "styled-components";

const StyledButton = styled.button`
    border-radius: 0.5rem;
    border-color: black;
    padding: 0.75rem 1.5rem;
    border-width: 3px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;

    transition: all 75ms ease-out;
    &:hover {
        transform: translate(0, -2px);
    }
`

export default function Button({ label = "Button", onClick }) {
    return <StyledButton onClick={onClick}>{label}</StyledButton>
}