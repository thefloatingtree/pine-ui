import ExpandingTextArea from 'react-expanding-textarea'
import styled from 'styled-components'

const StyledExpandingTextArea = styled(ExpandingTextArea)`
    border-radius: 0.5rem;
    border-color: black;
    padding: 0.75rem 1rem;
    border-width: 3px;
    font-weight: 600;
    background-color: white;
`

const StyledTextArea = styled.textarea`
    border-radius: 0.5rem;
    border-color: black;
    padding: 0.75rem 1rem;
    border-width: 3px;
    font-weight: 600;
    background-color: white;
`

export default function TextArea({ value, onChange, rows = 3, placeholder, maxLength, resize = true, resizeDirection = 'both', expand = false, className, children }) {

    const Component = expand ? StyledExpandingTextArea : StyledTextArea;
    resizeDirection = expand ? 'horizontal' : resizeDirection;

    return (
        <Component
            className={className}
            defaultValue={children}
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
            maxLength={maxLength}
            style={{ resize: resize ? resizeDirection : 'none' }}
        />
    )
}