import React from "react";
import Switch from './Switch';
import '../../index.css';

export default {
    title: "Switch",
    component: Switch
}

const Template = (args) => <Switch {...args}></Switch>

function logCheckState(e, state) {
    console.log(state)
}

export const Default = Template.bind({})
Default.args = {
    onColor: '#3362fe',
    offColor: '#ccc',
    dotColor: 'white',
    width: 100,
    onChange: logCheckState
}