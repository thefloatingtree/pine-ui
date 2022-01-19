import React from 'react';
import Popover from './Popover.jsx'
import "../../index.css";
import PopoverTrigger from './PopoverTrigger.jsx';
import Button from '../Button/Button.jsx';
import PopoverContent from './PopoverContent.jsx';
import styled from 'styled-components';


const Box = styled.div`
    border-style: solid;
    border-radius: 0.5rem;
    border-color: black;
    padding: 1rem;
    margin-top: 0.5rem;
    border-width: 3px;
    background-color: white;
    max-width: 20rem;
`


export default {
    title: "Popover",
    component: Popover
}

const Template = (args) => {
    return <Popover>
        <PopoverTrigger>
            <Button>Trigger Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
            <Box>
                <h3 style={{ margin: '0 0', marginBottom: '0.5rem' }}>Popover</h3>
                <p style={{ margin: '0 0' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit rem asperiores alias quia doloremque repellat dignissimos consequatur itaque quam, cupiditate ab unde. Asperiores esse hic repellat praesentium quae eveniet rem.</p>
            </Box>
        </PopoverContent>
    </Popover>
}

export const Default = Template.bind({})
Default.args = {
}