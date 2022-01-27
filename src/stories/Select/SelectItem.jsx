import styled from "styled-components";
import Button from "../Button/Button";

const StyledButton = styled(Button)`
    border: none;
`

export default function SelectItem({ children, className, onClick = () => {}, _onClick}) {
    return <StyledButton className={className} onClick={() => {
        onClick()
        _onClick(children)
    }} isFullWidth>{children}</StyledButton>
}