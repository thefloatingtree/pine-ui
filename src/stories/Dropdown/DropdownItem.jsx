import styled from "styled-components";
import Button from "../Button/Button";

const StyledButton = styled(Button)`
    border: none;
`

export default function DropdownItem({ children, className, onClick }) {
    return <StyledButton className={className} onClick={onClick} isFullWidth>{children}</StyledButton>
}