import styled from "styled-components";

const StyledRadio = styled.div`
margin: 1em 0;

& [type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

& [type="checkbox"]:checked + label,
[type="checkbox"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}

& [type="checkbox"]:checked + label:before,
[type="checkbox"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;

    background: transparent;
}

& [type="checkbox"]:checked + label:after,
[type="checkbox"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: ${props => props.color || '#8bf0f3'};
    position: absolute;
    top: 4px;
    left: 4px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

& [type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}

& [type="checkbox"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

`

export default function Checkbox(props) {
    return (
        <StyledRadio className={props.className} onClick={props.onClick} color={props.color}>
            <input type="checkbox" id={props.id} name={props.name}/>
            <label htmlFor={props.id} >{ props.label}</label>
        </StyledRadio>
    );
};