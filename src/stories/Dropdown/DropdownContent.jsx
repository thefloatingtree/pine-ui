import styled from "styled-components"

const DropdownContentBox = styled.div`
    border-style: solid;
    border-radius: 0.5rem;
    border-color: black;
    padding: 0.5rem 0.5rem;
    margin-top: 0.5rem;
    border-width: 3px;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export default function DropdownContent({ children, className }) {
    return <DropdownContentBox className={className}>{children}</DropdownContentBox>
}