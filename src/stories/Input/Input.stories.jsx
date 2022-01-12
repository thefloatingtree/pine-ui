import React from 'react';
import Input from './Input';

export default {
    title: "Input",
    component: Input
}

const Template = (args) => <Input  {...args} />

export const Default = Template.bind({})
Default.args = {
    placeholder: "Input",
    disabled: false
}

export const Test = () => {
    return <Input value="Testing"></Input>
}