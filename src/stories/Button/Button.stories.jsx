import React from 'react';
import Button from './Button';
import "../../index.css";

export default {
    title: "Button",
    component: Button
}

const Template = (args) => <Button {...args}>{args.label}</Button>

export const Default = Template.bind({})
Default.args = {
    label: "Button",
    isDisabled: false,
    isFullWidth: false
}