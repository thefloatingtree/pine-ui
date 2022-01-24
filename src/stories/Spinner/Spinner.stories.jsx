import React from 'react';
import "../../index.css";
import Spinner from './Spinner';

export default {
    title: "Spinner",
    component: Spinner
}

const Template = (args) => <div style={{ width: '1.5rem', height: '1.5rem' }}>
    <Spinner />
</div>

export const Default = Template.bind({})
Default.args = {
}