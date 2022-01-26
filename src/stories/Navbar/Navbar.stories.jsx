import React from 'react';
import NavBarTop from './NavBarTop'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default {
    title: "NavBarTop",
    component: NavBarTop
}

const Template = (args) => <NavBarTop {...args}>{args.label}</NavBarTop>

export const Default = Template.bind({})
Default.args = {
    label: "NavBarTop"
}