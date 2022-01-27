import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";


export default function Popover({ children }) {
    const [open, setOpen] = useState(false);
    const dropdownContainerRef = useRef(null)
    useOnClickOutside(dropdownContainerRef, () => setOpen(false))

    const handleTrigger = () => {
        setOpen(prev => !prev)
    }

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { _isOpen: open, _onTrigger: handleTrigger })
        }
        return child
    })

    return (
        <div ref={dropdownContainerRef}>
            {childrenWithProps}
        </div>
    );
}