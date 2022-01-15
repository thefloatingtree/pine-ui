import styled from "styled-components";
import React, { useState } from 'react';


const StyledSwitch = styled.div`
    background-color: ${props =>
        props.isChecked ? (props.color || '#2196F3') : (props.offColor || '#ccc')};
    border-radius: ${props => props.switchWidth ? props.switchWidth * .5667 + 'px' : '34px'};
    display: flex;
    padding: ${props => props.switchWidth ? props.switchWidth * .0333 + 'px' : '2px'};
    width: ${props => props.switchWidth ? props.switchWidth + 'px' : '60px'};

    & span {
        border-radius: ${props => props.switchWidth ? props.switchWidth * .5667 + 'px' : '34px'};
        background-color: ${props => props.dotColor || 'white'};
        display: block;
        width: ${props => props.switchWidth ? props.switchWidth * .4333 + 'px' : '26px'};
        height: ${props => props.switchWidth ? props.switchWidth * .4333 + 'px' : '26px'};
        transform: translateX(${props =>
            props.isChecked? props.switchWidth * .5667 + 'px' || '26px' : "0"});

        transition: all 400ms;
    }

    &:hover {
        cursor: pointer;
    }
`

export default function Switch(props) {
    const key = Math.floor(Math.random()).toString()
    const [isChecked, setIsChecked] = useState(false)

    return (
        <StyledSwitch
            isChecked={isChecked}
            className={`${props.className}`}
            offColor={props.offColor}
            color={props.onColor}
            dotColor={props.dotColor}
            switchWidth={props.width}
            key={key}
            onClick={e => {
                setIsChecked(prev => !prev);
                props.onChange && props.onChange(e, !isChecked) 
            }}

        >
            <span />
        </StyledSwitch>
    )
}



