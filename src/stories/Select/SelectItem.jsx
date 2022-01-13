import styled from "styled-components";
import Button from "../Button/Button";

const StyledButton = styled(Button)`
    border: none;
`

export default function SelectItem({ children, onClick = () => {}, _onClick}) {
    return <StyledButton onClick={() => {
        onClick()
        _onClick(children)
    }} isFullWidth>{children}</StyledButton>
}