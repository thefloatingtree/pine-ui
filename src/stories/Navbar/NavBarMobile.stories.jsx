import React from 'react';
import NavBarMobile from './NavBarMobile'
import './Navbar.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default {
    title: "NavBarMobile",
    component: NavBarMobile
}

const Template = (args) => <NavBarMobile {...args}>{args.label}</NavBarMobile>

export const Default = Template.bind({})
Default.args = {
    label: "NavBarMobile"
}