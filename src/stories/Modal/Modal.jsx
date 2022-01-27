import React, { useState } from "react";

export default function Modal({ children, isOpen, onClose }) {

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { _onModalClose: () => onClose(false), _isOpen: isOpen });
        }
        return child;
    })

    return childrenWithProps
}