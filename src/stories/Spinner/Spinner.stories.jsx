import React from 'react';
import "../../index.css";
import Spinner from './Spinner';
import styled from "styled-components";

export default {
    title: "Spinner",
    component: Spinner
}

const StyledSpinner = styled(Spinner)`
    width: 2rem;
    height: 2rem;
`

const Template = (args) => <StyledSpinner />

export const Default = Template.bind({})
Default.args = {
}