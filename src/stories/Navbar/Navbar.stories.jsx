import React from 'react';
import NavBarTop from './NavBarTop'

export default {
    title: "NavBarTop",
    component: NavBarTop
}

const Template = (args) => <NavBarTop {...args}>{args.label}</NavBarTop>

export const Default = Template.bind({})
Default.args = {
    label: "NavBarTop"
}