import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import Button from "../Button/Button"

const DropdownContainer = styled.div`
    
`

const DropdownContentContainer = styled.div`
    position: absolute;

    transition: all 75ms ease-in-out;
    opacity: ${ props => props.open ? '1' : '0' };
`

const RotateContainer = styled.div`
    width: 1rem;
    height: 1rem;
    margin-left: 0.75rem;

    transition: all 75ms ease-in-out;

    ${ props => props.active && `transform: rotate(-90deg);` }
`

const ButtonContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export default function Select({ placeholder = "Select", closeOnSelect = true, onSelect = () => {}, children }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(placeholder)
    const dropdownContainerRef = useRef(null);
    useOnClickOutside(dropdownContainerRef, () => setOpen(false));

    const handleOnSelect = (e) => {
        onSelect(e)
        setValue(e)
        if (closeOnSelect) setOpen(false)
    }

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { _onClickChild: handleOnSelect });
        }
        return child;
    });

    return (
        <DropdownContainer ref={dropdownContainerRef}>
            <Button onClick={() => setOpen(!open)}>
                <ButtonContentContainer>
                    <span>{value}</span>
                    <RotateContainer active={open}>
                        <svg style={{ width: "1rem", height: "1rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </RotateContainer>
                </ButtonContentContainer>
            </Button>
            <DropdownContentContainer open={open}>{childrenWithProps}</DropdownContentContainer>
        </DropdownContainer>
    );
}