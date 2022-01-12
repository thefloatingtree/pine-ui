import styled from "styled-components";

const StyledInput = styled.input`
    border-radius: 0.5rem;
    border-color: black;
    padding: 0.75rem 0.75rem;
    border-width: 3px;
    font-weight: 600;
    background-color: white;
    transition: all 75ms ease-out;
`

const DisabledStyledInput = styled(StyledInput)`
    background-color: lightgray;
    cursor: not-allowed;
`

export default function Input({ value, onChange, onEnter, placeholder, className, disabled = false }) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onEnter()
        }
    }

    const Component = disabled ? DisabledStyledInput : StyledInput;
    return <Component
        type="text"
        disabled={disabled}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown} />
}