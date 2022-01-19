import styled from "styled-components";
import Button from "../Button/Button";

const StyledButton = styled(Button)`
    border: none;
`

export default function DropdownItem({ children, onClick }) {
    return <StyledButton onClick={onClick} isFullWidth>{children}</StyledButton>
}