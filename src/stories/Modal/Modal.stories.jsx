import React, { useState } from 'react';
import styled from 'styled-components';
import "../../index.css";
import Button from '../Button/Button';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalOverlay from './ModalOverlay';

export default {
    title: "Modal",
    component: Modal
}

const Box = styled.div`
    border-style: solid;
    border-radius: 0.5rem;
    border-color: black;
    padding: 1rem;
    border-width: 3px;
    background-color: white;
    max-width: 20rem;
`

const Template = (args) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Trigger Modal</Button>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <Box>
                        <h3 style={{ margin: '0 0', marginBottom: '0.5rem' }}>Modal</h3>
                        <p style={{ margin: '0 0', marginBottom: '1rem' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit rem asperiores alias quia doloremque repellat dignissimos consequatur itaque quam, cupiditate ab unde. Asperiores esse hic repellat praesentium quae eveniet rem.</p>
                        <Button  onClick={() => setOpen(false)}>Close</Button>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    )
}

export const Default = Template.bind({})
Default.args = {
}