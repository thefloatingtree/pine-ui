import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button"

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

export default function Dropdown({ label, isFullWidth = false, children }) {
    const [open, setOpen] = useState(false);
    const dropdownContainerRef = useRef(null)
    useOnClickOutside(dropdownContainerRef, () => setOpen(false))

    return (
        <div ref={dropdownContainerRef}>
            <Button onClick={() => setOpen(!open)} isFullWidth={isFullWidth}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <span>{label}</span>
                    <RotateContainer active={open}>
                        <svg style={{ width: "1rem", height: "1rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </RotateContainer>
                </div>
            </Button>
            <DropdownContentContainer open={open}>{children}</DropdownContentContainer>
        </div>
    );
}

// https://usehooks.com/useOnClickOutside/
function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}